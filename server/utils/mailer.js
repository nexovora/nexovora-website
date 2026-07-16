const nodemailer = require("nodemailer");

const requiredEnvironmentVariables = [
  "EMAIL_USER",
  "EMAIL_APP_PASSWORD",
  "EMAIL_RECEIVER",
];

function validateEmailConfiguration() {
  const missingVariables = requiredEnvironmentVariables.filter(
    (variableName) => !process.env[variableName],
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing email configuration: ${missingVariables.join(", ")}`,
    );
  }
}

function createTransporter() {
  validateEmailConfiguration();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyEmailConnection() {
  const transporter = createTransporter();
  await transporter.verify();
}

async function sendContactEmail(contactData) {
  const transporter = createTransporter();

  const {
    fullName,
    email,
    phone,
    service,
    budget,
    timeline,
    details,
  } = contactData;

  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget || "Not provided");
  const safeTimeline = escapeHtml(timeline || "Not provided");
  const safeDetails = escapeHtml(details);

  const adminSubject = `New Nexovora Contact Inquiry — ${service}`;

  const adminText = `
New contact inquiry received from the Nexovora website.

Name: ${fullName}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Service: ${service}
Budget: ${budget || "Not provided"}
Timeline: ${timeline || "Not provided"}

Project Details:
${details}
  `.trim();

  const adminHtml = `
    <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="background:#081a3a;padding:24px 28px;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;">New Contact Inquiry</h1>
          <p style="margin:8px 0 0;color:#bfdbfe;">
            Received through the Nexovora website
          </p>
        </div>

        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:bold;width:170px;">
                Name
              </td>
              <td style="padding:10px 0;">${safeFullName}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">
                Email
              </td>
              <td style="padding:10px 0;">
                <a href="mailto:${safeEmail}" style="color:#2563eb;">
                  ${safeEmail}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">
                Phone / WhatsApp
              </td>
              <td style="padding:10px 0;">${safePhone}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">
                Service
              </td>
              <td style="padding:10px 0;">${safeService}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">
                Budget
              </td>
              <td style="padding:10px 0;">${safeBudget}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">
                Timeline
              </td>
              <td style="padding:10px 0;">${safeTimeline}</td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:20px;background:#eff6ff;border-radius:12px;">
            <h2 style="margin:0 0 12px;font-size:17px;">
              Project Details
            </h2>

            <p style="margin:0;line-height:1.7;white-space:pre-wrap;">
              ${safeDetails}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  const clientSubject = "Thank you for contacting Nexovora";

  const clientText = `
Hi ${fullName},

Thank you for contacting Nexovora.

We have successfully received your inquiry regarding ${service}.

We will review your requirements and respond as soon as possible, normally within one business day.

If your request is urgent, you may contact us through WhatsApp at +92 328 8651551.

Best regards,

Nexovora
Creating Digital Excellence
  `.trim();

  const clientHtml = `
    <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#081a3a,#2563eb);padding:30px;color:#ffffff;">
          <h1 style="margin:0;font-size:25px;">NEXOVORA</h1>

          <p style="margin:8px 0 0;color:#dbeafe;font-size:13px;letter-spacing:1.5px;">
            CREATING DIGITAL EXCELLENCE
          </p>
        </div>

        <div style="padding:32px;">
          <h2 style="margin:0 0 18px;font-size:22px;">
            Thank you for reaching out
          </h2>

          <p style="margin:0 0 16px;line-height:1.7;color:#475569;">
            Hi ${safeFullName},
          </p>

          <p style="margin:0 0 16px;line-height:1.7;color:#475569;">
            We have successfully received your inquiry regarding
            <strong style="color:#0f172a;">${safeService}</strong>.
          </p>

          <p style="margin:0 0 16px;line-height:1.7;color:#475569;">
            We will review your requirements and respond as soon as possible,
            normally within one business day.
          </p>

          <div style="margin:24px 0;padding:20px;background:#eff6ff;border-radius:12px;border-left:4px solid #2563eb;">
            <p style="margin:0;color:#1e3a8a;line-height:1.7;">
              For urgent inquiries, contact us on WhatsApp:
              <strong>+92 328 8651551</strong>
            </p>
          </div>

          <p style="margin:24px 0 0;line-height:1.7;color:#475569;">
            Best regards,<br />
            <strong style="color:#0f172a;">Nexovora</strong><br />
            Creating Digital Excellence
          </p>
        </div>

        <div style="background:#06142e;padding:18px 32px;text-align:center;color:#cbd5e1;font-size:12px;">
          © 2026 Nexovora. All Rights Reserved.
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Nexovora Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  await transporter.sendMail({
    from: `"Nexovora" <${process.env.EMAIL_USER}>`,
    to: email,
    replyTo: process.env.EMAIL_RECEIVER,
    subject: clientSubject,
    text: clientText,
    html: clientHtml,
  });
}

module.exports = {
  sendContactEmail,
  verifyEmailConnection,
};