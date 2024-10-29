"use client";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="max-w-[740px] mx-auto justify-center mt-24">
      <div className="mb-[100px] flex flex-col mx-5 space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Privacy Policy
        </h1>

        <p className="text-sm text-muted-foreground">
          Last Updated: October 2024
        </p>

        <h2 className="mt-10 scroll-m-20 text-2xl font-semibold tracking-tight">
          Hey there! 👋
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to my little corner of the internet! This privacy policy is
          pretty straightforward because, well, I don&apos;t do much with your
          data. Let&apos;s break it down.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          What I Collect (Spoiler: Not Much)
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This is just a portfolio site, so I keep things simple. Here&apos;s
          what I might collect:
        </p>

        <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          1. Analytics Stuff
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Basic visit data to see if anyone&apos;s actually reading this (hi
          mom! 👋). This includes things like which pages you visit and how long
          you stay - nothing personal or creepy.
        </p>

        <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          2. Contact Form Info
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you reach out through the contact form, I&apos;ll only see what you
          choose to share. Usually just your name, email, and whatever message
          you send my way.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          What I Do With It
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Pretty much just use it to reply to your messages and maybe make the
          site better. No selling, no sharing, no spam - promise! 🤞
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          Security Talk
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I do my best to keep things secure, but the internet is the internet.
          Don&apos;t share any state secrets in the contact form, okay? 😉
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          Questions?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Got questions? Want to chat? Found a bug? Just want to say hi? Hit me
          up through the{" "}
          <Link
            href="/contact"
            className="font-medium text-primary underline underline-offset-4"
          >
            contact form
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
