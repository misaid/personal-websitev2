// External Imports
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Internal Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Uofa from "@/components/Uofa";
import Languages from "@/components/Skills";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
          <section className="w-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border">
            <div className="items-center flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full justify-center">
              <div className="flex sm:mr-4">
                <Image
                  src="https://moprojects.s3.us-east-2.amazonaws.com/portfolio/hiking.png"
                  alt="Mohamed Said"
                  width={100}
                  height={100}
                  priority
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full text-center sm:text-left [&>h4]:mt-1 ">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Mohamed Said
                </h1>
                <p className="mt-1 text-sm font-medium leading-none">
                  Full-Stack Software Developer
                </p>
                <p className="mt-1 text-sm font-light leading-none">
                  Edmonton, Alberta 🇨🇦
                </p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <div className="flex flex-row space-x-4">
                  <a
                    href="https://www.linkedin.com/in/misaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mohamed Said on LinkedIn"
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.github.com/misaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mohamed Said on GitHub"
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                  >
                    <Github />
                  </a>
                  <a
                    href="mailto:mohamediasaid@outlook.ca"
                    aria-label="Email Mohamed Said"
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hover:cursor-pointer font-semibold"
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col space-y-4 border-t pt-5">
              <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I build secure, scalable software. <span>👋</span>
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-5">
                I&apos;m Mohamed, a software developer in Edmonton. I build web
                and mobile products across the front end, back end, databases,
                and deployment, with experience in AI evaluation and secure
                software development.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild>
                  <Link href="/projects">View projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </section>

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

                    <p className="mt-3 text-sm leading-6">
                      Coursework spanning software engineering, algorithms,
                      databases, cryptography, AI, information retrieval, web
                      development, and digital image processing. Developed
                      projects applying these concepts to cryptanalysis, image
                      processing, search, and web applications.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="workexp">
              <div className="w-full max-w-[700px] p-4 space-y-2.5 shadow-md rounded-lg border mt-2.5">
                <div className="w-full h-full rounded-lg flex flex-col space-y-4">
                  <div className="border-b pb-4">
                    <p className="text-sm text-muted-foreground">
                      Sept 2025 – Present
                    </p>
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      AI Evaluation Analyst
                    </h2>
                    <p className="text-muted-foreground">Outlier</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>
                        Evaluated LLM prompt-response pairs for factual
                        accuracy, coherence, and adherence to writing-quality
                        guidelines, applying a structured rubric across a high
                        volume of outputs
                      </li>
                      <li>
                        Delivered written feedback and actionable
                        recommendations on prompt design and model behavior,
                        contributing to measurable improvements in response
                        accuracy and relevance
                      </li>
                      <li>
                        Selected from a pool of analysts to peer-review
                        evaluations submitted by other reviewers, catching
                        inconsistencies and enforcing quality standards across
                        the team
                      </li>
                      {/* <li> */}
                      {/*   Selected to peer-review work from other analysts to */}
                      {/*   ensure accuracy, consistency, and quality of evaluations */}
                      {/* </li> */}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Sept 2024 – Dec 2024
                    </p>
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Student Software Developer
                    </h2>
                    <p className="text-muted-foreground">Nexzones</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>
                        Built a no-code, node-based platform that streamlined
                        daily developer operations, improving workflow
                        efficiency by 65%
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
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Languages */}
          <section className="w-full min-h-[400px] h-full max-w-[700px] mx-5 p-4 shadow-md rounded-lg border mt-5">
            <Languages />
          </section>

          {/* Projects */}
          <section className="w-full max-w-[700px] mx-5 p-4 space-y-2.5 shadow-md rounded-lg border mt-5">
            <div className="w-full flex flex-row border-b pb-2 items-center">
              <div>
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                  Projects
                </h2>
                <p className="text-sm text-muted-foreground">
                  A sample of product, platform, and academic work.
                </p>
              </div>
              <div className="w-full flex flex-row justify-end">
                <Link
                  className="p-2 flex flex-row items-center space-x-1 text-base text-muted-foreground hover:cursor-pointer"
                  href="/projects"
                >
                  <h3>See more</h3> <ArrowRight />
                </Link>
              </div>
            </div>
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
}
