import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "/",
  "/features",
  "/formats",
  "/cad-translation",
  "/security",
  "/pricing",
  "/demo",
  "/contact",
  "/privacy",
  "/terms",
  "/404"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.marketingUrl}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
