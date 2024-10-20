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
    <div className="fixed top-[0px]  sm:top-[7px] mx-5 z-50 max-w-[700px] w-full flex space-x-4 p-4 justify-between items-center shadow-md sm:rounded-lg border-b backdrop-blur-lg">
      <div className="flex space-x-5 text-md">
        <nav
          className="hover:cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Home
        </nav>
        <nav
          className="hover:cursor-pointer"
          onClick={() => {
            const homeSection = document.getElementById("projects");
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Projects
        </nav>
        <nav
          className="hover:cursor-pointer"
          onClick={() => {
            const homeSection = document.getElementById("contact");
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </nav>
      </div>
      <ModeToggle />
    </div>
  );
}
