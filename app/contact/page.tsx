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
    <div className="max-w-[900px] mx-auto mt-4 px-4">
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
      <div className="mb-[200px]">
        {/* Terminal prompt */}
        <div className="text-sm text-[#a6adc8] mb-4">
          <span className="text-[#a6e3a1]">$</span> ./send-message.sh
          <span className="text-[#a6e3a1] cursor-blink">_</span>
        </div>

        <h1 className="text-lg font-bold text-[#b4befe] mb-4">
          Contact Me.
        </h1>

        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px]"
            {...form.register("company")}
          />

          <div className="space-y-3">
            {/* Name */}
            <div>
              <label className="text-xs text-[#a6adc8] block mb-1">
                &gt; Name:
              </label>
              <input
                type="text"
                placeholder="your name"
                autoComplete="name"
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors"
                {...form.register("name_8403705091")}
              />
              {form.formState.errors.name_8403705091 && (
                <p className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_8403705091.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-[#a6adc8] block mb-1">
                &gt; Email:
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors"
                {...form.register("name_4765427973")}
              />
              {form.formState.errors.name_4765427973 && (
                <p className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_4765427973.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-[#a6adc8] block mb-1">
                &gt; Message:
              </label>
              <textarea
                placeholder="your message..."
                className="w-full bg-[#1e1e2e] border border-[#45475a] px-3 py-2 text-sm text-[#cdd6f4] placeholder-[#7f849c] focus:border-[#89b4fa]/60 focus:outline-none transition-colors resize-none h-24"
                {...form.register("name_2543664404")}
              />
              {form.formState.errors.name_2543664404 && (
                <p className="text-xs text-[#f38ba8] mt-1">
                  {form.formState.errors.name_2543664404.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm text-[#a6e3a1] border border-[#a6e3a1]/30 px-4 py-2 hover:bg-[#a6e3a1]/10 transition-colors disabled:opacity-50"
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
    </div>
  );
}