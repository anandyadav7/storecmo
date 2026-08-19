import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  /** Page title; the root template appends " | StoreCMO". */
  title: string;
  /** Set when the full title should be used as-is (homepage). */
  absoluteTitle?: boolean;
  description: string;
  /** Route path, e.g. "/blog". Used for canonical and og:url. */
  path: string;
  type?: "website" | "article";
  /** Route path of the OG image. Defaults to the site image. */
  image?: string;
  imageAlt?: string;
  article?: { publishedTime: string; modifiedTime: string; section: string; tags: string[] };
  keywords?: string[];
};

/**
 * Builds a complete Metadata object. Next.js replaces (not merges) nested
 * `openGraph`/`twitter` objects between layout and page, so every page
 * spells out the full set here rather than relying on the root layout.
 */
export function pageMetadata(input: PageMetadataInput): Metadata {
  const fullTitle = input.absoluteTitle ? input.title : `${input.title} | ${siteConfig.name}`;
  const image = input.image ?? "/opengraph-image";
  const imageAlt = input.imageAlt ?? fullTitle;
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: input.path },
    openGraph: {
      type: input.type ?? "website",
      url: input.path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description: input.description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      ...(input.article
        ? {
            publishedTime: input.article.publishedTime,
            modifiedTime: input.article.modifiedTime,
            section: input.article.section,
            tags: input.article.tags,
            authors: [siteConfig.author.name],
          }
        : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: input.description, images: [image] },
  };
}
