"use client";
// External Imports
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Internal Imports
import ModeToggle from "@/components/ModeToggle";

/**
 * The Navbar component is a component that displays the navigation bar.
 * It is composed of a list of links and a mode toggle button.
 * @returns Navbar {JSX.Element} - A JSX element representing the Navbar component.
 */

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center">
      <div className="fixed top-[0px]  z-50 max-w-[740px] w-full flex space-x-4 justify-between items-center py-4 backdrop-blur-lg">
        <nav className="flex space-x-5 text-md mx-5">
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
              pathname === "/contact" ? "text-foreground" : "text-foreground/60"
            } hover:cursor-pointer`}
          >
            Contact
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </div>
  );
}
