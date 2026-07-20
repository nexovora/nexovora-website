const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

dotenv.config();

const contactRoutes = require("./routes/contactRoutes");
const quoteRoutes = require("./routes/quoteRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");

const { verifyEmailConnection } = require("./utils/mailer");

const app = express();

/*
 * Railway runs the application behind a reverse proxy.
 * This allows express-rate-limit to correctly read the client IP.
 */
app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;

const allowedOrigins = (
  process.env.CLIENT_URLS ||
  process.env.CLIENT_URL ||
  "http://localhost:5174"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error("This origin is not allowed by CORS."));
    },
    methods: ["GET", "POST", "OPTIONS"],
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

app.use((error, request, response, _next) => {
  console.error("Server error:", error);

  if (error.message === "This origin is not allowed by CORS.") {
    response.status(403).json({
      success: false,
      message: "This website is not allowed to access the API.",
    });
    return;
  }

  response.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

console.log("Email environment status:", {
  EMAIL_USER: Boolean(process.env.EMAIL_USER),
  EMAIL_APP_PASSWORD: Boolean(process.env.EMAIL_APP_PASSWORD),
  EMAIL_RECEIVER: Boolean(process.env.EMAIL_RECEIVER),
});

app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Nexovora backend running on port ${PORT}`);

  console.log(
    `Allowed frontends: ${allowedOrigins.join(", ")}`,
  );

  try {
    await verifyEmailConnection();
    console.log("Email service connected successfully.");
  } catch (error) {
    console.error(
      "Email service connection failed:",
      error.message,
    );
  }
});
