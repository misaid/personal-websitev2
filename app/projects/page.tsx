import React from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  image: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/yl.jpg",
      languages: [
        "MongoDB",
        "React.js",
        "Express.js",
        "Node.js",
        "AWS",
        "Stripe",
      ],
      name: "GenShop",
      description:
        "A full-stack e-commerce platform with secure user authentication, seamless payment integration, and interactive product generation powered by advanced language models.",
      source: "https://github.com/misaid/genshop",
      live: "https://shop.msaid.dev/",
    },
    {
      image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/yl.jpg",
      languages: ["Java", "XML", "OneSignal", "Firebase"],
      name: "Holos",
      description:
        "An event management application for android that allows users to create, share, and join events. Features include real-time notifications, user authentication, and QR code check-in.",
      source: "https://github.com/CMPUT301W24T57/holos-Project",
    },
    {
      image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/yl.jpg",
      languages: ["MongoDB", "React.js", "Express.js", "Node.js"],
      name: "Rank Anything",
      description:
        "A full-stack web application that allows users to create, share, and vote on lists. Features include user authentication, real-time updates, and dynamic list generation.",
      source: "https://github.com/misaids/rank-anything",
      live: "https://rank.msaid.dev/",
    },
    {
      image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/yl.jpg",
      languages: ["HTML/CSS", "JavaScript", "PHP", "nginx"],
      name: "Portfolio Website (old)",
      description:
        "A static website that showcases my projects, skills, and experience. Features include a responsive design, interactive elements, and a clean user interface.",
      source: "https://github.com/misaid/Personal-Website",
      live: "https://msaid.dev/",
    },
  ];
  return (
    <div className="max-w-[740px] mx-auto justify-center">
      <div className="flex flex-col space-y-5 mx-5 mt-24 items-center justify-center ">
        <div
          id="projects"
          className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}