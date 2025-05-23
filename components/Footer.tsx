"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="mb-[100px] max-w-[740px] mx-auto justify-center w-full">
      <div className="flex flex-col space-y-5 mx-5 items-center justify-center">
        <div className="w-full max-w-[700px] mx-5 py-4 space-y-2.5 rounded-lg mt-5 flex items-center">
          <div className="w-full">
            <h4 className="text-sm text-muted-foreground">
              © 2024 mohamedsaid.ca |{" "}
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
              >
                privacy
              </Link>
            </h4>
          </div>

          <div className="flex w-full justify-end items-center">
            <div className="flex flex-row space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.github.com/misaid"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
              >
                <Github />
              </a>
              <a
                href="mailto:mohamediasaid@outlook.ca"
                className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
