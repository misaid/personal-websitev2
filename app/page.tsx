"use client";
// External Imports
import { Linkedin, Github, Mail } from "lucide-react";

// Internal Imports
import Navbar from "../components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Uofa from "../components/Uofa";
import Languages from "../components/Languages";

/**
 * The Home component is a page that displays a user's profile.
 * It is composed of a Navbar component and a user profile component.
 * @returns Home {JSX.Element} - A JSX element representing the Home component.
 */

// keep space of 5 rem between items
export default function Home(): JSX.Element {
  return (
    <div>
      <div className="max-w-[740px] mx-auto mt-5 justify-center">
        <Navbar />
        <div className="mb-[300px] flex flex-col space-y-5 mx-5 mt-24 items-center justify-center ">
          {/* User Profile */}
          <div className="items-center flex space-x-2 w-full p-4 shadow-md rounded-lg border">
            <div className="flex ">
              <Avatar>
                {/* placeholder */}
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQFojf8ezVE49Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718348643162?e=1729832400&v=beta&t=4qX594zw4al9O_ud1G5g4hdVfla1CRXf-TTf9vRnzqs" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Mohamed Said
              </h2>
              <div className="flex flex-row space-x-1.5 items-center">
                <h2 className="text-sm font-medium leading-none">
                  Student@UofA
                </h2>
                <div className="w-2.5 h-2.5 flex flex-row items-center">
                  <Uofa />
                </div>
              </div>
              <h4 className="text-sm font-light leading-none">
                🇨🇦 📍 Edmonton, Alberta
              </h4>
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
          {/* Yap */}
          <div className="flex-col space-y-2 w-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Hello, My name is Mohamed <span>👋</span>
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultricies, nisl nec lacinia fermentum, felis odio ultricies nunc,
              a ultrices nisl justo sit amet odio. Donec ultricies, nisl nec
              lacinia fermentum, felis odio ultricies nunc, a ultrices nisl
              justo sit amet
            </p>
          </div>
          {/* Languages */}
          <div className="w-full h-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
            <Languages />
          </div>
          {/*School*/}
          <div className="w-full max-w-[700px] mx-5 p-4 space-y-2.5 shadow-md rounded-lg border mt-5">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              School
            </h2>
            <div className="w-full p-4 h-full rounded-lg flex-row flex space-x-10">
              <div className="max-w-12 w-full h-full flex flex-row items-center">
                <Uofa />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-sm text-muted-foreground">
                  Sep 2022 - Apr 2025
                </p>
                <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  University of Alberta
                </h2>
                <h3 className="text-muted-foreground">
                  Bachelor of Science in Computing Science
                </h3>

                <ul className="my-6 ml-6 list-disc [&>li]:mt-2 block sm:hidden">
                  <li>Intro to Software Engineering</li>
                  <li>Computational Cryptography</li>
                  <li>Software Process and Product Management</li>
                  <li> Practical Programming Methodology</li>
                </ul>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2 sm:block hidden">
                  <li>
                    <span className="font-medium">Relevant Coursework:</span>{" "}
                    Intro to Software Engineering, Computational Cryptography,
                    Software Process and Product Management, Practical
                    Programming Methodology
                  </li>
                  <li>
                    Developed a program to crack weak RSA ciphers using Euler’s
                    totient function and natural language processing techniques
                  </li>
                  <li>
                    Built a convolutional neural network model to classify
                    digits
                  </li>
                  <li>
                    Developed an image compression program that achieves up to
                    83% compression using Discrete Cosine Transform
                  </li>
                  <li>
                    Implemented data structures like linked lists, stacks, and
                    queues in C for blackjack game simulation
                  </li>
                  <li>
                    Collaborated on various team projects, emphasizing software
                    engineering best practices and code reviews
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="w-full max-w-[700px] mx-5 p-4 space-y-2.5 shadow-md rounded-lg border mt-5">
            <div className="w-half p-4  rounded-lg border">
              <h2 className="text-sm font-medium leading-none">Projects</h2>
            </div>
            <div className="w-full p-4 h-64 rounded-lg border"></div>
          </div>
          {/* notice */}
          <div className="w-full max-w-[700px] mx-5 p-4 space-y-2.5 shadow-md rounded-lg border mt-5 flex justify-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              🚧 SITE UNDER CONSTRUCTION 🚧
            </h3>
          </div>
          <div className="w-full max-w-[700px] mx-5 p-4 space-y-2.5 rounded-lg mt-5 flex items-center">
            <div className="w-full">
              <h4 className="text-sm text-muted-foreground">
                © 2024 mohamedsaid.ca |{" "}
                <span className="font-semibold">privacy</span>
              </h4>
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
      </div>
    </div>
  );
}
