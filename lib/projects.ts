export interface Project {
  image?: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/homi.png",
    languages: ["Expo", "React Native", "React Query", "Clerk", "Rails", "PostgreSQL", "Redis", "Supabase Storage"],
    name: "Homi",
    description: "A lightweight, mobile-first property management app for independent landlords and small teams to manage units, tenants, rent, payments, maintenance, and photos.",
    source: "https://github.com/misaid/homi",
    featured: true,
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/msb_feed.png",
    languages: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript", "Docker"],
    name: "Social Distribution",
    description: "A full-stack, federated social web application inspired by Mastodon, built for a closed-source academic assignment.",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/twitter2.png",
    languages: ["Python", "SQLite"],
    name: "Twitter CLI",
    description: "A command-line social network clone with posting, following, feeds, and tweet discovery, built for a closed-source academic assignment.",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/genshop.png",
    languages: ["MongoDB", "React.js", "Express.js", "Node.js", "AWS", "Stripe"],
    name: "GenShop",
    description: "A full-stack e-commerce platform with secure authentication, Stripe payments, and AI-assisted product generation.",
    source: "https://github.com/misaid/genshop",
    live: "https://shop.msaid.dev/",
    featured: true,
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/holos.png",
    languages: ["Java", "XML", "Firebase", "Jest", "Figma"],
    name: "Holos",
    description: "An Android event-management app with real-time notifications, authentication, and QR-code check-in.",
    source: "https://github.com/CMPUT301W24T57/holos-Project",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/rankanything.png",
    languages: ["MongoDB", "React.js", "Express.js", "Node.js"],
    name: "Rank Anything",
    description: "A full-stack application for creating, sharing, and voting on dynamically generated lists.",
    source: "https://github.com/misaid/rank-anything",
    live: "https://rank.msaid.dev/",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/v1.png",
    languages: ["HTML/CSS", "JavaScript", "PHP", "nginx"],
    name: "Portfolio Website (v1)",
    description: "The earlier static version of this portfolio, with responsive design and interactive elements.",
    source: "https://github.com/misaid/Personal-Website",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
