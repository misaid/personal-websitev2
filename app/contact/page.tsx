"use client";
import React from "react";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  name_8403705091: z.string().trim().min(1, "Name is required").max(120, "Name is too long"),
  name_4765427973: z.string().email("Invalid email address"),
  name_2543664404: z.string().trim().min(1, "Message is required").max(5_000, "Message must be 5,000 characters or fewer"),
  company: z.string().optional(),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_8403705091: "",
      name_4765427973: "",
      name_2543664404: "",
      company: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="max-w-[900px] mx-auto mt-6 px-4 pb-16">
      <Toaster
        toastOptions={{
          style: {
            background: "#1e1e2e",
            border: "1px solid #45475a",
            color: "#cdd6f4",
            fontFamily: "var(--font-geist-mono), monospace",
          },
        }}
      />
      {/* Terminal prompt */}
      <div className="text-sm text-[#a6adc8] mb-4 select-none" aria-hidden="true">
        <span className="text-[#a6e3a1]">$</span> ./send-message.sh
        <span className="text-[#a6e3a1] cursor-blink">_</span>
      </div>

      <h1 className="text-lg font-bold text-[#b4befe] mb-1">
        Contact me.
      </h1>
      <p className="text-sm text-[#9399b2] mb-4">
        The fastest way to reach me. I usually reply within a couple of days.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" noValidate>
          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-px w-px overflow-hidden"
            {...form.register("company")}
          />

          <div className="space-y-3">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="text-xs text-[#a6adc8] block mb-1">
                &gt; Name:
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="your name"
                autoComplete="name"
                aria-invalid={!!form.formState.errors.name_8403705091}
                aria-describedby={form.formState.errors.name_8403705091 ? "contact-name-error" : undefined}
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors"
                {...form.register("name_8403705091")}
              />
              {form.formState.errors.name_8403705091 && (
                <p id="contact-name-error" role="alert" className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_8403705091.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-xs text-[#a6adc8] block mb-1">
                &gt; Email:
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!form.formState.errors.name_4765427973}
                aria-describedby={form.formState.errors.name_4765427973 ? "contact-email-error" : undefined}
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors"
                {...form.register("name_4765427973")}
              />
              {form.formState.errors.name_4765427973 && (
                <p id="contact-email-error" role="alert" className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_4765427973.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-xs text-[#a6adc8] block mb-1">
                &gt; Message:
              </label>
              <textarea
                id="contact-message"
                placeholder="your message..."
                aria-invalid={!!form.formState.errors.name_2543664404}
                aria-describedby={form.formState.errors.name_2543664404 ? "contact-message-error" : undefined}
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors resize-none h-24"
                {...form.register("name_2543664404")}
              />
              {form.formState.errors.name_2543664404 && (
                <p id="contact-message-error" role="alert" className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_2543664404.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm text-[#a6e3a1] border border-[#a6e3a1]/30 px-4 py-2 hover:bg-[#a6e3a1]/10 transition-colors disabled:opacity-50 w-full sm:w-auto"
            >
              {isSubmitting ? "[sending...]" : "[send message]"}
            </button>
            <p className="text-xs text-[#9399b2] mt-3">
              By submitting this form, I agree to the{" "}
              <Link
                href="/privacy"
                className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
              >
                [privacy policy]
              </Link>
              .
            </p>
          </div>
      </form>
    </div>
  );
}