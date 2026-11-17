export interface Project {
  image?: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
  featured?: boolean;
  highlights?: string[];
  /** Extra screenshots shown in the project's detail carousel. */
  images?: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const projects: Project[] = [
  {
    image: "/projects/gmk87/01-lighting-rainbow.webp",
    languages: ["Rust", "Tauri v2", "React", "TypeScript", "Tailwind", "WebGL2"],
    name: "GMK87 Configurator",
    description: "An open-source desktop app and CLI for the ZUOYA GMK87 mechanical keyboard. It sets the 240×135 display image or GIF, RGB lighting and clock over USB HID, with no vendor software.",
    images: [
      { src: "/projects/gmk87/01-lighting-rainbow.webp", width: 1800, height: 1125, alt: "GMK87 Configurator lighting tab previewing a rainbow effect across the keyboard" },
      { src: "/projects/gmk87/02-lighting-steady-glow.webp", width: 1800, height: 1125, alt: "Lighting tab with a steady glow effect selected" },
      { src: "/projects/gmk87/03-lighting-draft-mode.webp", width: 1800, height: 1125, alt: "Lighting tab in draft mode with unsaved changes" },
      { src: "/projects/gmk87/04-light-bar-editor.webp", width: 1800, height: 1125, alt: "Light bar editor for the keyboard's side lighting" },
      { src: "/projects/gmk87/05-display-slots.webp", width: 1800, height: 1325, alt: "Display slots tab for the keyboard's 240x135 screen" },
      { src: "/projects/gmk87/06-profiles.webp", width: 1800, height: 1125, alt: "Profiles tab for saving and switching keyboard configurations" },
      { src: "/projects/gmk87/07-device.webp", width: 1800, height: 1125, alt: "Device tab showing connection and keyboard details" },
      { src: "/projects/gmk87/10-lighting-compact.webp", width: 1800, height: 1260, alt: "Lighting tab in the compact layout" },
    ],
    highlights: [
      "Reverse-engineered the keyboard's USB HID protocol from packet captures and documented it, including corrections to earlier community notes.",
      "Rust workspace of 4 crates: a pure protocol codec, device layer, Tauri-free application layer, and React UI. The app layer is tested against a mock transport.",
      "Handles a write-only device with draft mode, undo/redo and revert, and enforces write rules drawn from a real interrupted-upload incident.",
      "Real-time per-key lighting preview in a shared WebGL2 shader with a CPU fallback. Runs on Linux, macOS and Windows.",
      "213 front-end tests (vitest), Rust unit tests, clippy with warnings denied, and CI on Linux and Windows.",
    ],
    source: "https://github.com/misaid/gmk87-tauri-app",
    featured: true,
  },
  {
    image: "/projects/hypr-seam.png",
    languages: ["C++", "Hyprland", "Meson", "Ninja"],
    name: "hypr-seam",
    description: "A Hyprland plugin that flattens the corners where tiled windows meet, with per-corner and per-app rounding rules. Detects adjacent windows with a configurable tolerance for gap spacing.",
    images: [
      { src: "/projects/hypr-seam.png", width: 1280, height: 640, alt: "hypr-seam flattening the corners where tiled Hyprland windows meet" },
    ],
    highlights: [
      "Hooks an internal Hyprland function to replace native corner rendering with a custom seam effect.",
      "Per-corner and per-app rounding rules, plus a configurable tolerance for detecting adjacent windows across gaps.",
      "Installable through hyprpm, built with Meson and Ninja.",
    ],
    source: "https://github.com/misaid/hypr-seam",
  },
  {
    image: "/projects/homi/cover.webp",
    languages: ["Expo", "React Native", "React Query", "Clerk", "Rails", "PostgreSQL", "Redis", "Supabase Storage"],
    name: "Homi",
    description: "A lightweight, mobile-first property management app for independent landlords and small teams to manage units, tenants, rent, payments, maintenance, and photos.",
    images: [
      { src: "/projects/homi/home.webp", width: 600, height: 1333, alt: "Homi home dashboard" },
      { src: "/projects/homi/rent.webp", width: 600, height: 1333, alt: "Homi rent schedule" },
      { src: "/projects/homi/tenants.webp", width: 600, height: 1333, alt: "Homi tenants list" },
      { src: "/projects/homi/tenant-detail.webp", width: 600, height: 1333, alt: "Homi tenant detail" },
      { src: "/projects/homi/units.webp", width: 600, height: 1333, alt: "Homi units list" },
      { src: "/projects/homi/unit-detail.webp", width: 600, height: 1333, alt: "Homi unit detail" },
      { src: "/projects/homi/issue-detail.webp", width: 600, height: 1333, alt: "Homi maintenance issue detail" },
      { src: "/projects/homi/new-issue.webp", width: 600, height: 1333, alt: "Homi new maintenance issue form" },
      { src: "/projects/homi/notifications.webp", width: 600, height: 1333, alt: "Homi notifications" },
      { src: "/projects/homi/settings.webp", width: 600, height: 1333, alt: "Homi settings" },
    ],
    highlights: [
      "React Native (Expo) app backed by a Ruby on Rails API, with Clerk JWT auth and per-organization scoping.",
      "Rent schedules with due and paid tracking, maintenance issue logging, and unit photos stored in Supabase Storage.",
      "Expo push notifications for rent reminders and maintenance alerts on iOS and Android.",
      "Typed form validation with Zod and react-hook-form; Redis, Cloudflare and Docker in the stack.",
    ],
    source: "https://github.com/misaid/homi",
    featured: true,
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/msb_feed.png",
    languages: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript", "Docker"],
    name: "Social Distribution",
    description: "A full-stack, federated social web application inspired by Mastodon, built as closed-source university coursework.",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/twitter2.png",
    languages: ["Python", "SQLite"],
    name: "Twitter CLI",
    description: "A command-line social network clone with posting, following, feeds, and tweet discovery, built as closed-source university coursework.",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/genshop.png",
    languages: ["MongoDB", "React.js", "Express.js", "Node.js", "AWS", "Stripe"],
    name: "GenShop",
    description: "A full-stack e-commerce platform with secure authentication, Stripe payments, and AI-assisted product generation.",
    images: [
      { src: "/projects/genshop/genshop.webp", width: 1024, height: 576, alt: "GenShop storefront home page" },
      { src: "/projects/genshop/demo.webp", width: 1894, height: 1020, alt: "GenShop product browsing and checkout demo" },
    ],
    highlights: [
      "Search, filter, cart and Stripe checkout, plus AI-generated products reviewed by an admin before listing.",
      "Passwords hashed with bcrypt and salt; JWT-based authentication.",
      "Sharp image pipeline reached 44.73x compression, with optimized assets served from AWS S3.",
    ],
    source: "https://github.com/misaid/genshop",
    live: "https://shop.msaid.dev/",
    featured: true,
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/holos.png",
    languages: ["Java", "XML", "Firebase", "Jest", "Figma"],
    name: "Holos",
    description: "An Android event-management app with real-time notifications, authentication, and QR-code check-in.",
    highlights: [
      "Real-time notifications and authentication on Firebase.",
      "QR-code check-in for event attendees.",
      "Tested with Jest, with the UI designed in Figma.",
    ],
    source: "https://github.com/CMPUT301W24T57/holos-Project",
  },
  {
    image: "https://moprojects.s3.us-east-2.amazonaws.com/portfolio/rankanything.png",
    languages: ["MongoDB", "React.js", "Express.js", "Node.js"],
    name: "Rank Anything",
    description: "A full-stack application for creating, sharing, and voting on dynamically generated lists.",
    highlights: [
      "Users create rooms with their own item lists and join rooms by name or from a list.",
      "Rankings are computed from the sum of every member's ranking.",
      "bcrypt-hashed passwords and JWT authentication.",
    ],
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
