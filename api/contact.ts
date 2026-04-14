import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body ?? {};

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "cleantexnigeria@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Cleantex Website" <cleantexnigeria@gmail.com>',
      to: "cleantexnigeria@gmail.com",
      replyTo: email,
      subject: `Quote Request – ${service} | ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    });
    return res.json({ success: true });
  } catch {
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
