import React from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  image?: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
}

/**
 * The Projects page component
 * @returns {JSX.Element} - The Projects page
 */
export default function Projects() {
  const projects: Project[] = [
    {
      image:
        "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/msb_feed.png",
      languages: [
        "Python",
        "Django",
        "PostgreSQL",
        "HTML/CSS",
        "JavaScript",
        "Docker",
      ],
      name: "Social Distribution",
      description:
        "A full-stack distributed web application inspired by Mastodon, enabling users to share content and interact across federated nodes. Developed as part of a closed-source academic assignment.",
    },
    {
      image:
        "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/twitter2.png",
      languages: ["Python", "SQLite"],
      name: "Twitter CLI",
      description:
        "A command-line interface Twitter clone that enables users to post tweets, view tweets, follow others, and access a personalized feed. Developed as part of a closed-source academic assignment.",
    },
    {
      image:
        "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/genshop.png",
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
      image:
        "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/holos.png",
      languages: ["Java", "XML", "OneSignal", "Firebase", "Jest", "Figma"],
      name: "Holos",
      description:
        "An event management application for android that allows users to create, share, and join events. Features include real-time notifications, user authentication, and QR code check-in.",
      source: "https://github.com/CMPUT301W24T57/holos-Project",
    },
    {
      image:
        "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/rankanything.png",
      languages: ["MongoDB", "React.js", "Express.js", "Node.js"],
      name: "Rank Anything",
      description:
        "A full-stack web application that allows users to create, share, and vote on lists. Features include user authentication, real-time updates, and dynamic list generation.",
      source: "https://github.com/misaid/rank-anything",
      live: "https://rank.msaid.dev/",
    },
    {
      image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/v1.png",
      languages: ["HTML/CSS", "JavaScript", "PHP", "nginx"],
      name: "Portfolio Website (old)",
      description:
        "A static website that showcases my projects, skills, and experience. Features include a responsive design, interactive elements, and a clean user interface.",
      source: "https://github.com/misaid/Personal-Website",
      // live: "https://msaid.dev/",
    },
  ];
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
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
