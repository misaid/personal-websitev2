"use client";
// External Imports
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

// Internal Imports
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

/**
 * The Navbar component is a component that displays the navigation bar.
 * It is composed of a list of links and a mode toggle button.
 * @returns Navbar {JSX.Element} - A JSX element representing the Navbar component.
 */

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center">
      <div className="fixed top-[0px]  z-50 max-w-[740px] w-full flex py-4 backdrop-blur-lg">
        <div className="w-full flex flex-row mx-5 justify-between items-center">
          <nav aria-label="Primary navigation" className="flex space-x-5 text-md">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              } hover:cursor-pointer`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/projects"
                  ? "text-foreground"
                  : "text-foreground/60"
              } hover:cursor-pointer`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/contact"
                  ? "text-foreground"
                  : "text-foreground/60"
              } hover:cursor-pointer`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <a
                href="/Mohamed_Said_resume.pdf"
                download
                aria-label="Download Mohamed Said's résumé"
              >
                <Download className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
