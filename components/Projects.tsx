import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 "
    >
      {featuredProjects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
