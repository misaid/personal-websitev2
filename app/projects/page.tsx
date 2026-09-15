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
    <div className="max-w-[900px] mx-auto mt-6 px-4 pb-16">
      {/* Terminal prompt */}
      <div className="text-sm text-[#a6adc8] mb-4" aria-hidden="true">
        <span className="text-[#a6e3a1]">$</span> ls ./projects/
        <span className="text-[#a6e3a1] cursor-blink">_</span>
      </div>

      <h1 className="text-lg font-bold text-[#b4befe] mb-1">
        My projects.
      </h1>
      <p className="text-sm text-[#9399b2] mb-4">
        Full-stack, mobile, and academic work. Source code and live demos where available.
      </p>

      <div
        id="projects"
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}