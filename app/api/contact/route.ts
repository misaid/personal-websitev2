"use server";

import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import process from "node:process";

// Extended form schema including the honeypot
const formSchema = z.object({
  name_8403705091: z.string().min(1, "Name is required"),
  name_4765427973: z.string().email("Invalid email address"),
  name_2543664404: z.string().min(1, "Message is required"),
  company: z.string().optional(), // honeypot
});

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validated = formSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name_8403705091, name_4765427973, name_2543664404, company } =
      validated.data;

    // Honeypot check (silent fail recommended)
    if (company && company.trim().length > 0) {
      console.warn("Bot detected: honeypot filled", company);
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 },
      );
    }

    // Send email
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.PERSONAL_EMAIL,
        subject: "New message from contact form",
        text: `
New Contact Form Submission

Name: ${name_8403705091}
Email: ${name_4765427973}
Message: ${name_2543664404}

Sent from website contact form
        `,
        html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
    <p><strong>Name:</strong> ${name_8403705091}</p>
    <p><strong>Email:</strong> ${name_4765427973}</p>
    <p><strong>Message:</strong><br>${name_2543664404}</p>
  </div>
  <p style="color: #666; font-size: 12px;">Sent from your website contact form</p>
</div>
        `,
      });
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
