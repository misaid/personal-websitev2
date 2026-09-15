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
    <header className="w-full border-b border-[#45475a] bg-[#181825] sticky top-0 z-40">
      <div className="max-w-[900px] mx-auto flex items-center justify-between gap-2 px-4 py-2">
        <nav aria-label="Primary navigation" className="flex items-center text-sm gap-1">
          <span className="text-[#a6e3a1] mr-1" aria-hidden="true">$</span>
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-1 sm:px-2 py-1 transition-colors ${
                    isActive
                      ? "text-[#a6e3a1] text-glow"
                      : "text-[#a6adc8] hover:text-[#cdd6f4]"
                  }`}
                >
                  {link.label}
                </Link>
                {i < links.length - 1 && (
                  <span className="text-[#585b70]" aria-hidden="true">|</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
        <div className="flex items-center shrink-0">
          <a
            href="/Mohamed_Said_resume.pdf"
            download
            aria-label="Download Mohamed Said's résumé"
            className="text-sm text-[#a6adc8] hover:text-[#a6e3a1] transition-colors py-1 whitespace-nowrap"
          >
            <span className="sm:hidden">[resume]</span>
            <span className="hidden sm:inline">[download resume]</span>
          </a>
        </div>
      </div>
    </header>
  );
}