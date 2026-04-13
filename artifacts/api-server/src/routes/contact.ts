import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cleantexnigeria@gmail.com",
    pass: process.env["GMAIL_APP_PASSWORD"],
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body as {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };

  if (!name || !email || !phone || !service || !message) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Cleantex Website" <cleantexnigeria@gmail.com>`,
      to: "cleantexnigeria@gmail.com",
      replyTo: email,
      subject: `Quote Request - ${service} | ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a6b3c; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Quote Request</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
            </table>
            <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />
            <p style="font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 16px;">Sent from the Cleantex Environmental Services website contact form.</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

export default router;
