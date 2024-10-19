"use client";
// External Imports
import { Linkedin, Github, Mail } from "lucide-react";

// Internal Imports
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Uofa from "../components/Uofa";

/**
 * The Home component is a page that displays a user's profile.
 * It is composed of a Navbar component and a user profile component.
 * @returns Home {JSX.Element} - A JSX element representing the Home component.
 */

// keep space of 5 rem between items
export default function Home(): JSX.Element {
  const theme = useTheme().resolvedTheme;
  return (
    <div className="max-w-[740px] mx-auto mt-5 mb-[1000px]">
      <Navbar />
      <div className="flex-col space-y-5 mx-5 mt-24 ">
        {/* User Profile */}
        <div className="items-center flex space-x-2 w-full p-4 shadow-md rounded-lg border">
          <div className="flex ">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQFojf8ezVE49Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718348643162?e=1729832400&v=beta&t=4qX594zw4al9O_ud1G5g4hdVfla1CRXf-TTf9vRnzqs" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-semibold ">Mohamed Said</h2>
            <div className="flex flex-row space-x-2 items-center">
              <h2 className="text-sm">Student@UofA</h2>

              <Uofa />
            </div>
            <h4 className="font-light text-sm">🇨🇦 📍 Edmonton, Alberta</h4>
          </div>
          <div className="flex w-full justify-end items-center">
            <div className="flex flex-row space-x-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.github.com/misaid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a href="mailto:mohamediasaid@outlook.ca">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Yap */}
      <div className="flex-col space-y-2 w-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
        <h2 className="font-semibold text-3xl">Hello, My name is Mohamed 👋</h2>
        <h3 className="text-wrap">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies, nisl nec lacinia fermentum, felis odio ultricies nunc, a
          ultrices nisl justo sit amet odio. Donec ultricies, nisl nec lacinia
          fermentum, felis odio ultricies nunc, a ultrices nisl justo sit amet
        </h3>
      </div>
    </div>
  );
}
