"use client";
// External Imports
import React from "react";

// Internal Imports
import ModeToggle from "./ModeToggle";

/**
 * The Navbar component is a component that displays the navigation bar.
 * It is composed of a list of links and a mode toggle button.
 * @returns Navbar {JSX.Element} - A JSX element representing the Navbar component.
 */
export default function Navbar(): JSX.Element {
  return (
    <div className="fixed top-[0px] mx-5 z-50 max-w-[700px] w-full flex space-x-4 justify-between items-center py-4 backdrop-blur-lg">
      <nav className="flex space-x-5 text-md">
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Home
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer"
          onClick={() => {
            const homeSection = document.getElementById("projects");
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Projects
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer"
          onClick={() => {
            const homeSection = document.getElementById("contact");
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </a>
      </nav>
      <ModeToggle />
    </div>
  );
}
