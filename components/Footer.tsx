"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full border-t border-[#45475a] bg-[#181825] mt-auto">
      <div className="max-w-[900px] mx-auto flex items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center gap-3 text-[#a6adc8]">
          <span className="text-[#a6e3a1]">--</span>
          <span>NORMAL</span>
          <span className="text-[#585b70]">|</span>
          <span>mohamedsaid.ca</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            [privacy]
          </Link>
          <span className="text-[#585b70]">|</span>
          <a
            href="https://www.linkedin.com/in/misaid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            [linkedin]
          </a>
          <a
            href="https://www.github.com/misaid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            [github]
          </a>
          <a
            href="mailto:mohamediasaid@outlook.ca"
            className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            [email]
          </a>
        </div>
      </div>
    </div>
  );
}