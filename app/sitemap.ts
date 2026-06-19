import type { MetadataRoute } from "next";
import { SITE_INDEXABLE_PATHS, SITE_URLS } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const bases = Object.values(SITE_URLS);

  return bases.flatMap((baseUrl) =>
    SITE_INDEXABLE_PATHS.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    }))
  );
}
