"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <div className="w-full border-b border-[#45475a] bg-[#181825]">
      <div className="max-w-[900px] mx-auto flex items-center justify-between px-4 py-2">
        <nav aria-label="Primary navigation" className="flex items-center text-sm gap-1">
          <span className="text-[#a6e3a1] mr-1">$</span>
          {links.map((link, i) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={`px-2 py-0.5 transition-colors ${
                  pathname === link.href
                    ? "text-[#a6e3a1] text-glow"
                    : "text-[#a6adc8] hover:text-[#cdd6f4]"
                }`}
              >
                {link.label}
              </Link>
              {i < links.length - 1 && (
                <span className="text-[#585b70]">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/Mohamed_Said_resume.pdf"
            download
            aria-label="Download Mohamed Said's résumé"
            className="text-sm text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            [download resume]
          </a>
        </div>
      </div>
    </div>
  );
}