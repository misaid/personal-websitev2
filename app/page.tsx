"use client";
// External Imports
import { Linkedin, Github, Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// Internal Imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Uofa from "@/components/Uofa";
import Languages from "@/components/Skills";
import Projects from "@/components/Projects";

/**
 * The Home component is a page that displays a user's profile.
 * It is composed of a Navbar component and a user profile component.
 * @returns Home {JSX.Element} - A JSX element representing the Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="w-full h-full">
      <div className="max-w-[740px] mx-auto mt-5 justify-center">
        <div className="flex flex-col space-y-5 mx-5 mt-24 items-center justify-center ">
          {/* User Profile */}
          <div className="items-center flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 w-full p-4 shadow-md rounded-lg border justify-center">
            <div className="flex">
              <Avatar>
                {/* placeholder */}
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQFojf8ezVE49Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718348643162?e=1729832400&v=beta&t=4qX594zw4al9O_ud1G5g4hdVfla1CRXf-TTf9vRnzqs" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col w-full text-center sm:text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Mohamed Said
              </h2>
              <h2 className="text-sm font-medium leading-none">
                Student@University of Alberta
              </h2>
              <h4 className="text-sm font-light leading-none">
                📍 Edmonton, Alberta 🇨🇦
              </h4>
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="flex flex-row space-x-2">
                <a
                  href="https://www.linkedin.com/in/misaid"
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
              I like to develop modern, scalable, and secure fullstack
              applications. If you&apos;re looking for a passionate and
              dedicated developer, feel free to{" "}
              <Link href="/contact" className="underline font-semibold">
                reach out!
              </Link>
            </p>
          </div>
          {/* Languages */}
          <div className="w-full min-h-[400px] h-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
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
                  Sep 2022 - Jun 2025
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
                    queues in C
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
            <div className="w-full flex flex-row border-b pb-2 items-center">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Projects
              </h2>
              <div className="w-full flex flex-row justify-end">
                <a
                  className="p-2 flex flex-row items-center space-x-1 text-base text-muted-foreground hover:cursor-pointer"
                  href="/projects"
                >
                  <h3>See more</h3> <ArrowRight />
                </a>
              </div>
            </div>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
