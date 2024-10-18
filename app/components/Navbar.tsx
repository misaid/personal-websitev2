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
    <div className="w-full flex space-x-4 p-4 justify-between items-center shadow-md rounded-lg border ">
      <div className="flex space-x-5 text-md">
        <h2 className="hover:cursor-pointer">Home</h2>
        <h2 className="hover:cursor-pointer">Projects</h2>
        <h2 className="hover:cursor-pointer">Contact</h2>
      </div>
      <ModeToggle />
    </div>
  );
}
