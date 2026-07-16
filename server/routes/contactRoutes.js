const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendContactEmail } = require("../utils/mailer");

const router = express.Router();

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many contact requests. Please wait a few minutes and try again.",
  },
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  if (!phone) {
    return true;
  }

  return /^[+]?[\d\s()-]{7,20}$/.test(phone);
}

router.post("/", contactFormLimiter, async (request, response) => {
  try {
    const {
      fullName,
      email,
      phone = "",
      service,
      budget = "",
      timeline = "",
      details,
      website = "",
    } = request.body;

    // Hidden honeypot field used for basic spam protection.
    if (website) {
      return response.status(200).json({
        success: true,
        message: "Message received.",
      });
    }

    if (!fullName?.trim()) {
      return response.status(400).json({
        success: false,
        message: "Full name is required.",
      });
    }

    if (!email?.trim() || !isValidEmail(email.trim())) {
      return response.status(400).json({
        success: false,
        message: "A valid email address is required.",
      });
    }

    if (!isValidPhone(phone.trim())) {
      return response.status(400).json({
        success: false,
        message: "Please provide a valid phone number.",
      });
    }

    if (!service?.trim()) {
      return response.status(400).json({
        success: false,
        message: "Please select a service.",
      });
    }

    if (!details?.trim() || details.trim().length < 20) {
      return response.status(400).json({
        success: false,
        message:
          "Project details must contain at least 20 characters.",
      });
    }

    await sendContactEmail({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      budget: budget.trim(),
      timeline: timeline.trim(),
      details: details.trim(),
    });

    return response.status(200).json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return response.status(500).json({
      success: false,
      message:
        "We could not send your message right now. Please contact us through WhatsApp or email.",
    });
  }
});

module.exports = router;