import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack, mobile, and academic software projects by Mohamed Said.",
  alternates: { canonical: "/projects" },
};

/**
 * The Projects page component
 * @returns {JSX.Element} - The Projects page
 */
export default function Projects() {
  return (
    <div className="max-w-[740px] mx-auto justify-center mt-24">
      <div className="flex flex-col space-y-6 justify-center mx-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          My projects.
        </h1>
        <div
          id="projects"
          className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 "
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
