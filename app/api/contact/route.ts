"use server";

import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import process from "node:process";

// Define the form schema using Zod
const formSchema = z.object({
  name_8403705091: z.string().min(1, "Name is required"),
  name_4765427973: z.string().email("Invalid email address"),
  name_2543664404: z.string().min(1, "Message is required"),
});

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Handles the POST request for the contact form
 * @param request - The request object containing the form data
 * @returns A NextResponse object with a success message or an error message
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedFields = formSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    // Handle the form data here
    console.log("Form data received:", body);
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.PERSONAL_EMAIL,
        subject: "New message from contact form",
        text: `
New Contact Form Submission

Name: ${body.name_8403705091}
Email: ${body.name_4765427973}
Message: ${body.name_2543664404}

Sent from: website contact form
        `,
        html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
    <p><strong>Name:</strong> ${body.name_8403705091}</p>
    <p><strong>Email:</strong> ${body.name_4765427973}</p>
    <p><strong>Message:</strong><br>${body.name_2543664404}</p>
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
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
