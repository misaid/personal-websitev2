import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack, mobile, and academic software projects by Mohamed Said.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <div className="max-w-[900px] mx-auto mt-4 px-4">
      {/* Terminal prompt */}
      <div className="text-sm text-[#a6adc8] mb-4">
        <span className="text-[#a6e3a1]">$</span> ls ./projects/
        <span className="text-[#a6e3a1] cursor-blink">_</span>
      </div>

      <h1 className="text-lg font-bold text-[#b4befe] mb-4">
        My projects.
      </h1>

      <div
        id="projects"
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}