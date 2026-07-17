const { Resend } = require("resend");

const requiredEnvironmentVariables = [
  "RESEND_API_KEY",
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

function createEmailClient() {
  validateEmailConfiguration();

  return new Resend(process.env.RESEND_API_KEY);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendEmail({
  to,
  subject,
  text,
  html,
  replyTo,
}) {
  const resend = createEmailClient();

  const result = await resend.emails.send({
    from: "Nexovora <hello@nexovorastudio.com>",
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
    html,
    replyTo,
  });

  if (result.error) {
    throw new Error(
      result.error.message || "Email could not be sent.",
    );
  }

  return result.data;
}

async function verifyEmailConnection() {
  validateEmailConfiguration();

  console.log("Resend email configuration loaded successfully.");

  return true;
}

async function sendContactEmail(contactData) {
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

  await sendEmail({
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `New Nexovora Contact Inquiry — ${service}`,
    text: `
New contact inquiry received from the Nexovora website.

Name: ${fullName}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Service: ${service}
Budget: ${budget || "Not provided"}
Timeline: ${timeline || "Not provided"}

Project Details:
${details}
    `.trim(),
    html: `
      <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
          <div style="background:#081a3a;padding:26px;color:#ffffff;">
            <h1 style="margin:0;font-size:24px;">New Contact Inquiry</h1>
            <p style="margin:8px 0 0;color:#bfdbfe;">
              Received through nexovorastudio.com
            </p>
          </div>

          <div style="padding:28px;">
            <p><strong>Name:</strong> ${safeFullName}</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:${safeEmail}" style="color:#2563eb;">
                ${safeEmail}
              </a>
            </p>
            <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>
            <p><strong>Timeline:</strong> ${safeTimeline}</p>

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
    `,
  });

  await sendEmail({
    to: email,
    replyTo: process.env.EMAIL_RECEIVER,
    subject: "Thank you for contacting Nexovora",
    text: `
Hi ${fullName},

Thank you for contacting Nexovora.

We have received your inquiry regarding ${service}. Our team will review your requirements and respond as soon as possible.

For urgent inquiries, contact us through WhatsApp at +92 328 8651551.

Best regards,
Nexovora
Creating Digital Excellence
    `.trim(),
    html: `
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

            <p style="line-height:1.7;color:#475569;">
              Hi ${safeFullName},
            </p>

            <p style="line-height:1.7;color:#475569;">
              We have received your inquiry regarding
              <strong style="color:#0f172a;">${safeService}</strong>.
            </p>

            <p style="line-height:1.7;color:#475569;">
              Our team will review your requirements and respond as soon as possible.
            </p>

            <div style="margin:24px 0;padding:20px;background:#eff6ff;border-radius:12px;border-left:4px solid #2563eb;">
              <p style="margin:0;color:#1e3a8a;">
                For urgent inquiries, contact us on WhatsApp:
                <strong>+92 328 8651551</strong>
              </p>
            </div>

            <p style="margin-top:24px;line-height:1.7;color:#475569;">
              Best regards,<br />
              <strong>Nexovora</strong><br />
              Creating Digital Excellence
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

async function sendQuoteRequestEmail(quoteData) {
  const {
    fullName,
    email,
    whatsapp,
    service,
    budget,
    deadline,
    details,
  } = quoteData;

  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeWhatsapp = escapeHtml(whatsapp || "Not provided");
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget || "Not provided");
  const safeDeadline = escapeHtml(deadline || "Not provided");
  const safeDetails = escapeHtml(details);

  await sendEmail({
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `New Quote Request — ${service}`,
    text: `
New quotation request received.

Name: ${fullName}
Email: ${email}
WhatsApp: ${whatsapp || "Not provided"}
Service: ${service}
Budget: ${budget || "Not provided"}
Preferred Deadline: ${deadline || "Not provided"}

Project Details:
${details}
    `.trim(),
    html: `
      <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#081a3a,#2563eb);padding:26px;color:#ffffff;">
            <h1 style="margin:0;font-size:24px;">New Quote Request</h1>
          </div>

          <div style="padding:28px;">
            <p><strong>Name:</strong> ${safeFullName}</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:${safeEmail}" style="color:#2563eb;">
                ${safeEmail}
              </a>
            </p>
            <p><strong>WhatsApp:</strong> ${safeWhatsapp}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>
            <p><strong>Preferred Deadline:</strong> ${safeDeadline}</p>

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
    `,
  });

  await sendEmail({
    to: email,
    replyTo: process.env.EMAIL_RECEIVER,
    subject: "Your Nexovora quotation request has been received",
    text: `
Hi ${fullName},

Thank you for requesting a quotation from Nexovora.

We have received your request regarding ${service}. We will review your requirements and contact you with the most suitable solution.

Best regards,
Nexovora
Creating Digital Excellence
    `.trim(),
    html: `
      <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#081a3a,#2563eb);padding:30px;color:#ffffff;">
            <h1 style="margin:0;">NEXOVORA</h1>
            <p style="margin:8px 0 0;color:#dbeafe;">
              CREATING DIGITAL EXCELLENCE
            </p>
          </div>

          <div style="padding:32px;">
            <h2>Your quotation request has been received</h2>

            <p style="line-height:1.7;color:#475569;">
              Hi ${safeFullName},
            </p>

            <p style="line-height:1.7;color:#475569;">
              We have received your request regarding
              <strong>${safeService}</strong>.
            </p>

            <p style="line-height:1.7;color:#475569;">
              We will review your requirements and contact you with the most suitable solution.
            </p>

            <p style="margin-top:24px;">
              Best regards,<br />
              <strong>Nexovora</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

async function sendNewsletterEmail(email) {
  const safeEmail = escapeHtml(email);

  await sendEmail({
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: "New Nexovora Newsletter Subscriber",
    text: `
A new visitor subscribed to the Nexovora newsletter.

Email: ${email}
    `.trim(),
    html: `
      <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px;">
          <h1>New Newsletter Subscriber</h1>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${safeEmail}" style="color:#2563eb;">
              ${safeEmail}
            </a>
          </p>
        </div>
      </div>
    `,
  });

  await sendEmail({
    to: email,
    replyTo: process.env.EMAIL_RECEIVER,
    subject: "Welcome to Nexovora Updates",
    text: `
Thank you for subscribing to Nexovora updates.

You will receive practical insights, website tips, QA guidance, design ideas, and business updates.

Best regards,
Nexovora
Creating Digital Excellence
    `.trim(),
    html: `
      <div style="background:#f8fafc;padding:32px;font-family:Arial,sans-serif;color:#0f172a;">
        <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#081a3a,#2563eb);padding:28px;color:#ffffff;">
            <h1 style="margin:0;">NEXOVORA</h1>
            <p style="margin:8px 0 0;color:#dbeafe;">
              CREATING DIGITAL EXCELLENCE
            </p>
          </div>

          <div style="padding:32px;">
            <h2>Thank you for subscribing</h2>

            <p style="line-height:1.7;color:#475569;">
              You are now subscribed to Nexovora updates.
            </p>

            <p style="line-height:1.7;color:#475569;">
              We will share practical insights, website tips, QA guidance,
              design ideas, and useful business updates.
            </p>

            <p style="margin-top:24px;">
              Best regards,<br />
              <strong>Nexovora</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

module.exports = {
  sendContactEmail,
  sendQuoteRequestEmail,
  sendNewsletterEmail,
  verifyEmailConnection,
};
