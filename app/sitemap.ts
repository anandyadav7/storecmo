import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { tools } from "@/lib/tools";

/** Bump when the tools section's content changes meaningfully. */
const toolsUpdatedAt = "2026-08-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts.reduce((max, post) => (post.updatedAt > max ? post.updatedAt : max), toolsUpdatedAt);
  return [
    { url: absoluteUrl("/"), lastModified: latest, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/product"), lastModified: latest, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: latest, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/tools"), lastModified: toolsUpdatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: latest, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: latest, changeFrequency: "yearly", priority: 0.4 },
    ...posts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: post.updatedAt, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...tools.map((tool) => ({ url: absoluteUrl(`/tools/${tool.slug}`), lastModified: toolsUpdatedAt, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
