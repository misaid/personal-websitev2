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

export default function Skills(): JSX.Element {
  const skills: Skill[] = [
    { icon: <FaJava color="#f5c2e7" size={20} />, name: "Java", description: "OOP language" },
    { icon: <FaPython color="#89b4fa" size={20} />, name: "Python", description: "Dynamic language" },
    { icon: <SiTypescript color="#89b4fa" size={20} />, name: "TypeScript", description: "Typed JavaScript" },
    { icon: <SiCplusplus color="#b4befe" size={20} />, name: "C++", description: "Compiled language" },
    { icon: <SiRuby color="#f38ba8" size={20} />, name: "Ruby", description: "Dynamic language" },
    { icon: <SiReact color="#89dceb" size={20} />, name: "React", description: "Frontend library" },
    { icon: <SiNextdotjs color="#cdd6f4" size={20} />, name: "Next.js", description: "React framework" },
    { icon: <SiExpress color="#94e2d5" size={20} />, name: "Express", description: "Web framework" },
    { icon: <SiPostgresql color="#89b4fa" size={20} />, name: "PostgreSQL", description: "SQL database" },
    { icon: <SiMongodb color="#a6e3a1" size={20} />, name: "MongoDB", description: "NoSQL database" },
    { icon: <SiGit color="#fab387" size={20} />, name: "Git", description: "Version control" },
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
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="border border-[#45475a] p-3 flex items-center gap-3 min-w-0 hover:border-[#a6e3a1]/40 transition-colors"
          >
            <span aria-hidden="true">{skill.icon}</span>
            <div>
              <h4 className="text-xs font-bold text-[#cdd6f4]">
                {skill.name}
              </h4>
              <p className="text-xs text-[#9399b2]">
                {skill.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}