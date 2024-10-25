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
  ];
  return (
    <div
      id="projects"
      className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 "
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
