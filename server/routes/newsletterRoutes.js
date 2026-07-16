const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendNewsletterEmail } = require("../utils/mailer");

const router = express.Router();

const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many subscription attempts. Please wait and try again.",
  },
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", newsletterLimiter, async (request, response) => {
  try {
    const { email, website = "" } = request.body;

    if (website) {
      return response.status(200).json({
        success: true,
        message: "Subscription received.",
      });
    }

    if (!email?.trim() || !isValidEmail(email.trim())) {
      return response.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    await sendNewsletterEmail(email.trim());

    return response.status(200).json({
      success: true,
      message:
        "Thank you for subscribing to Nexovora updates.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return response.status(500).json({
      success: false,
      message:
        "Unable to complete your subscription right now.",
    });
  }
});

module.exports = router;