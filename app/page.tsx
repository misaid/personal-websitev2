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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHe_4B9mxfKww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718278675835?e=1747872000&v=beta&t=-S8l8DDr5O9E4AAc7IGEQkidgI5paz8t2313JopjYuI" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col w-full text-center sm:text-left">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Mohamed Said
              </h2>
              <h2 className="text-sm font-medium leading-none">
                Student at the University of Alberta
              </h2>
              <h4 className="text-sm font-light leading-none">
                📍 Edmonton, Alberta 🇨🇦
              </h4>
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="flex flex-row space-x-4">
                <a
                  href="https://www.linkedin.com/in/misaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.github.com/misaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                >
                  <Github />
                </a>
                <a
                  href="mailto:mohamediasaid@outlook.ca"
                  className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
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

          {/*School / WorkExp*/}
          <Tabs defaultValue="workexp" className="mt-5 w-full">
            <TabsList className="w-full">
              <TabsTrigger value="workexp" className="w-full">
                Work Experience
              </TabsTrigger>
              <TabsTrigger value="school" className="w-full">
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="school">
              <div className="w-full max-w-[700px] p-4 space-y-2.5 shadow-md rounded-lg border mt-2.5">
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
                        <span className="font-medium">
                          Relevant Coursework:
                        </span>{" "}
                        Intro to Software Engineering, Computational
                        Cryptography, Software Process and Product Management,
                        Practical Programming Methodology
                      </li>
                      <li>
                        Developed a program to crack weak RSA ciphers using
                        Euler’s totient function and natural language processing
                        techniques
                      </li>
                      <li>
                        Built a convolutional neural network model to classify
                        digits
                      </li>
                      <li>
                        Developed an image compression program that achieves up
                        to 83% compression using Discrete Cosine Transform
                      </li>
                      <li>
                        Implemented data structures like linked lists, stacks,
                        and queues in C
                      </li>
                      <li>
                        Collaborated on various team projects, emphasizing
                        software engineering best practices and code reviews
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="workexp">
              <div className="w-full max-w-[700px] p-4 space-y-2.5 shadow-md rounded-lg border mt-2.5">
                <div className="w-full h-full rounded-lg flex flex-col space-y-4">
                  <div className="border-b pb-4">
                    <p className="text-sm text-muted-foreground">
                      Sept 2024 – Dec 2024
                    </p>
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Student Software Developer
                    </h2>
                    <p className="text-muted-foreground">
                      Nexzones, Edmonton, AB
                    </p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>
                        Developed a no-code, node-based solution that improved
                        developer workflow by 65% through streamlined operations
                      </li>
                      <li>
                        Served as Scrum Master for a team of 8 student
                        developers, successfully leading the team to deliver all
                        project milestones on time despite tight deadlines
                      </li>
                      <li>
                        Achieved 80% test coverage using Jest for unit tests and
                        Selenium for UI tests, enhancing application reliability
                      </li>
                      <li>
                        Containerized the application using Docker, simplifying
                        deployment and ensuring cross-environment compatibility
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      July 2024 – Oct 2024
                    </p>
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      AI Evaluation Analyst
                    </h2>
                    <p className="text-muted-foreground">Outlier, Remote</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>
                        Conducted analysis of prompt responses from Large
                        Language Models to evaluate accuracy and relevance
                      </li>
                      <li>
                        Assessed output for writing quality, coherence, and
                        adherence to factual information
                      </li>
                      <li>
                        Provided feedback and recommendations for improving
                        prompt design and model performance
                      </li>
                      <li>
                        Selected to peer-review work from other analysts to
                        ensure accuracy, consistency, and quality of evaluations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          {/* Languages */}
          <div className="w-full min-h-[400px] h-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
            <Languages />
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
