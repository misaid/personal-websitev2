"use client";

import {
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiRuby,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";

interface Skill {
  icon: JSX.Element;
  name: string;
  description: string;
}

export default function Languages(): JSX.Element {
  const skills: Skill[] = [
    { icon: <FaJava color="#f5c2e7" size={20} />, name: "Java", description: "OOP Language" },
    { icon: <FaPython color="#89b4fa" size={20} />, name: "Python", description: "Dynamic language" },
    { icon: <SiTypescript color="#89b4fa" size={20} />, name: "TypeScript", description: "Typed JavaScript" },
    { icon: <SiCplusplus color="#b4befe" size={20} />, name: "C++", description: "Compiled Language" },
    { icon: <SiRuby color="#f38ba8" size={20} />, name: "Ruby", description: "Dynamic Language" },
    { icon: <SiReact color="#89dceb" size={20} />, name: "React", description: "Frontend Library" },
    { icon: <SiNextdotjs color="#cdd6f4" size={20} />, name: "Next.js", description: "React Framework" },
    { icon: <SiExpress color="#94e2d5" size={20} />, name: "Express", description: "Web Framework" },
    { icon: <SiPostgresql color="#89b4fa" size={20} />, name: "PostgreSQL", description: "SQL Database" },
    { icon: <SiMongodb color="#a6e3a1" size={20} />, name: "MongoDB", description: "NoSQL Database" },
    { icon: <SiGit color="#fab387" size={20} />, name: "Git", description: "Version Control" },
    { icon: <SiDocker color="#89b4fa" size={20} />, name: "Docker", description: "Containerization" },
  ];

  return (
    <div>
      <div className="border-b border-[#45475a] pb-2 mb-3">
        <h2 className="text-lg font-bold text-[#b4befe]">Skills</h2>
        <p className="text-xs text-[#9399b2]">
          Languages and technologies I&apos;ve worked with.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-[#45475a] p-3 flex items-center gap-3 hover:border-[#a6e3a1]/40 transition-colors"
          >
            <span>{skill.icon}</span>
            <div>
              <h4 className="text-xs font-bold text-[#cdd6f4]">
                {skill.name}
              </h4>
              <p className="text-xs text-[#9399b2]">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}