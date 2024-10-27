import { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
// languages
import {
  FaPython,
  FaJava,
  // , FaJs
} from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";
// frameworks
import {
  // SiDjango,
  SiReact,
  // SiNodedotjs,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
// databases
import {
  // SiSqlite,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
// import { DiMysql } from "react-icons/di";
// tools
import {
  SiGit,
  SiDocker,
  // SiLinux,
  SiNeovim,
} from "react-icons/si";

interface Skill {
  icon: JSX.Element;
  name: string;
  description: string;
}

export default function Languages(): JSX.Element {
  const [size, setSize] = useState(0);
  const [mounted, setMounted] = useState(false);

  const skills: Skill[] = [
    { icon: <FaJava size={size} />, name: "Java", description: "OOP Language" },
    {
      icon: <FaPython size={size} />,
      name: "Python",
      description: "Language",
    },
    {
      icon: <SiTypescript size={size} />,
      name: "TypeScript",
      description: "Typed JS",
    },
    {
      icon: <SiCplusplus size={size} />,
      name: "C++",
      description: "Language",
    },
    // {
    //   icon: <SiDjango size={size} />,
    //   name: "Django",
    //   description: "Web Framework",
    // },
    {
      icon: <SiReact size={size} />,
      name: "React",
      description: "JavaScript Framework",
    },
    // {
    //   icon: <SiNodedotjs size={size} />,
    //   name: "Node.js",
    //   description: "Server-side JS",
    // },
    {
      icon: <SiNextdotjs size={size} />,
      name: "Next.js",
      description: "React Framework",
    },
    {
      icon: <SiExpress size={size} />,
      name: "Express",
      description: "Web Framework",
    },
    {
      icon: <SiPostgresql size={size} />,
      name: "PostgreSQL",
      description: "SQL Database",
    },
    // {
    //   icon: <DiMysql size={size} />,
    //   name: "MySQL",
    //   description: "SQL Database",
    // },
    {
      icon: <SiMongodb size={size} />,
      name: "MongoDB",
      description: "NoSQL Database",
    },
    // {
    //   icon: <SiSqlite size={size} />,
    //   name: "SQLite",
    //   description: "Embedded DB",
    // },
    {
      icon: <SiGit size={size} />,
      name: "Git",
      description: "Version Control",
    },
    {
      icon: <SiDocker size={size} />,
      name: "Docker",
      description: "Containerization",
    },
    // { icon: <SiLinux size={size} />, name: "Linux", description: "OS" },
    {
      icon: <SiNeovim size={size} />,
      name: "Neovim",
      description: "Text Editor",
    },
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
    handleResize();
    window.addEventListener("resize", handleResize);
    setMounted(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center space-y-3">
      <div className="flex flex-col border-b pb-2">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
          {" "}
          Skills{" "}
        </h2>

        <p className="text-l text-muted-foreground">
          A curated selection of languages and technologies I&apos;ve worked
          with.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {mounted &&
          skills.map((skill, index) => (
            <Boxes
              key={index}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
            />
          ))}
      </div>
    </div>
  );
}
const Boxes = ({
  icon,
  name,
  description,
}: {
  icon: JSX.Element;
  name: string;
  description: string;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }

  return (
    <Tilt scale={1.05} tiltReverse={true} className="w-full h-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full w-full shadow-md rounded-lg border flex flex-col items-center justify-center p-2 sm:p-4"
      >
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out rounded-lg"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            pointerEvents: "none",
          }}
        />
        {icon}
        <h4 className="mt-2 sm:mt-4 text-[9px] sm:text-sm font-medium leading-none">
          {name}
        </h4>
        <p className="hidden sm:block text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </Tilt>
  );
};