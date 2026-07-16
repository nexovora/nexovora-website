const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const contactRoutes = require("./routes/contactRoutes");
const quoteRoutes = require("./routes/quoteRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");

const { verifyEmailConnection } = require("./utils/mailer");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_URL =
  process.env.CLIENT_URL || "http://localhost:5174";

app.use(helmet());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);


app.use(express.json({ limit: "100kb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

app.get("/api/health", (request, response) => {
  response.status(200).json({
    success: true,
    message: "Nexovora backend is running successfully.",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.use("/api", (request, response) => {
  response.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

app.use((error, request, response, next) => {
  console.error("Server error:", error);

  response.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

app.listen(PORT, async () => {
  console.log(`Nexovora backend running at http://localhost:${PORT}`);
  console.log(`Allowed frontend: ${CLIENT_URL}`);

  try {
    await verifyEmailConnection();
    console.log("Email service connected successfully.");
  } catch (error) {
    console.error("Email service connection failed:", error.message);
  }
});