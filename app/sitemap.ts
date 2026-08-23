import type { MetadataRoute } from "next";

const baseUrl = "https://mohamedsaid.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/contact", "/privacy"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/projects" ? 0.8 : 0.5,
  }));
}
