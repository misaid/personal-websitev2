import { useState, useEffect } from "react";
// languages
import {
  FaPython,
  FaJava,
  // , FaJs
} from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";
// frameworks
import { SiDjango, SiReact, SiNodedotjs, SiExpress } from "react-icons/si";
// databases
import { SiSqlite, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
// tools
import { SiGit, SiDocker, SiLinux, SiNeovim } from "react-icons/si";

interface Skill {
  icon: JSX.Element;
  name: string;
}

export default function Languages(): JSX.Element {
  const [size, setSize] = useState(0);
  const [mounted, setMounted] = useState(false);
  const languages: Skill[] = [
    { icon: <FaJava size={size} />, name: "Java" },
    { icon: <FaPython size={size} />, name: "Python" },
    // { icon: <FaJs size={size} />, name: "JavaScript" },
    { icon: <SiTypescript size={size} />, name: "TypeScript" },
    { icon: <SiCplusplus size={size} />, name: "C++" },
  ];
  const frameworks: Skill[] = [
    { icon: <SiDjango size={size} />, name: "Django" },
    { icon: <SiReact size={size} />, name: "React" },
    { icon: <SiNodedotjs size={size} />, name: "Node.js" },
    { icon: <SiExpress size={size} />, name: "Express" },
  ];
  const databases: Skill[] = [
    { icon: <SiPostgresql size={size} />, name: "PostgreSQL" },
    { icon: <DiMysql size={size} />, name: "MySQL" },
    { icon: <SiMongodb size={size} />, name: "MongoDB" },
    { icon: <SiSqlite size={size} />, name: "SQLite" },
  ];
  const tools: Skill[] = [
    { icon: <SiGit size={size} />, name: "Git" },
    { icon: <SiDocker size={size} />, name: "Docker" },
    { icon: <SiLinux size={size} />, name: "Linux" },
    { icon: <SiNeovim size={size} />, name: "Neovim" },
  ];
  function handleResize(): void {
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 1400) {
      setSize(80);
    } else {
      setSize(viewportWidth * 0.06);
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [mounted]);

  if (!mounted)
    return (
      <div className="w-full h-[1000px]">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Skills
        </h2>
      </div>
    );
  return (
    <div className="space-y-4">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Skills
        </h2>
      </div>
      <div>
        <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Languages
        </h3>
        <div className="flex sm:space-x-4 space-x-2">
          {languages.map((language) => (
            <Boxes
              key={language.name}
              icon={language.icon}
              name={language.name}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Frameworks
        </h3>
        <div className="flex sm:space-x-4 space-x-2">
          {frameworks.map((framework) => (
            <Boxes
              key={framework.name}
              icon={framework.icon}
              name={framework.name}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Databases
        </h3>
        <div className="flex sm:space-x-4 space-x-1.5">
          {databases.map((database) => (
            <Boxes
              key={database.name}
              icon={database.icon}
              name={database.name}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Tools
        </h3>
        <div className="flex sm:space-x-4 space-x-2">
          {tools.map((tool) => (
            <Boxes key={tool.name} icon={tool.icon} name={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Boxes = ({
  icon,
  name,
}: {
  icon: JSX.Element;
  name: string;
}): JSX.Element => {
  return (
    <div className="h-full w-full shadow-md rounded-lg border flex flex-col items-center justify-center p-4">
      {icon}
      <h4 className="mt-2 sm:mt-4 text-[8px] sm:text-sm font-medium leading-none">
        {name}
      </h4>
    </div>
  );
};
