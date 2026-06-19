import type { MetadataRoute } from "next";
import { SITE_URLS } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: Object.values(SITE_URLS).map((url) => `${url}/sitemap.xml`),
  };
}
