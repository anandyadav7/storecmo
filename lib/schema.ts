import type { BlogPost } from "@/lib/blog";
import { extractFaq } from "@/lib/markdown";
import { absoluteUrl, sameAs, siteConfig } from "@/lib/site";

/** Stable @ids so every page's schema points at the same Organization / Person nodes. */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;
export const PERSON_ID = `${siteConfig.url}/#founder`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: { "@type": "ImageObject", url: absoluteUrl("/storecmo-logo.svg") },
    founder: { "@id": PERSON_ID },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.author.url,
    worksFor: { "@id": ORGANIZATION_ID },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [organizationSchema(), personSchema(), websiteSchema()] };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageSchema(input: { type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"; name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    wordCount: post.wordCount,
    keywords: post.tags,
    articleSection: post.category,
    inLanguage: "en-US",
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function faqSchema(post: BlogPost) {
  const items = extractFaq(post.content);
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
