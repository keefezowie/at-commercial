import type { MetadataRoute } from "next/types";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteConfig.marketingUrl}/sitemap.xml`
  };
}

