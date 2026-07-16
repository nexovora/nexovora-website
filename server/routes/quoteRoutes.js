const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendQuoteRequestEmail } = require("../utils/mailer");

const router = express.Router();

const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many quotation requests. Please wait and try again.",
  },
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[+]?[\d\s()-]{7,20}$/.test(phone);
}

router.post("/", quoteLimiter, async (request, response) => {
  try {
    const {
      fullName,
      email,
      whatsapp,
      service,
      budget,
      deadline = "",
      details,
      website = "",
    } = request.body;

    if (website) {
      return response.status(200).json({
        success: true,
        message: "Request received.",
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

    if (!whatsapp?.trim() || !isValidPhone(whatsapp.trim())) {
      return response.status(400).json({
        success: false,
        message: "A valid WhatsApp number is required.",
      });
    }

    if (!service?.trim()) {
      return response.status(400).json({
        success: false,
        message: "Please select a service.",
      });
    }

    if (!budget?.trim()) {
      return response.status(400).json({
        success: false,
        message: "Please select a budget range.",
      });
    }

    if (!details?.trim() || details.trim().length < 20) {
      return response.status(400).json({
        success: false,
        message:
          "Project details must contain at least 20 characters.",
      });
    }

    await sendQuoteRequestEmail({
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      service: service.trim(),
      budget: budget.trim(),
      deadline: deadline.trim(),
      details: details.trim(),
    });

    return response.status(200).json({
      success: true,
      message:
        "Your quotation request has been sent successfully.",
    });
  } catch (error) {
    console.error("Quote request error:", error);

    return response.status(500).json({
      success: false,
      message:
        "We could not send your quotation request. Please try again.",
    });
  }
});

module.exports = router;