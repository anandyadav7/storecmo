/**
 * Single source of truth for site-wide settings. Change the brand, URL,
 * author, or navigation here and every page, sitemap, feed, and schema follows.
 */
export const siteConfig = {
  name: "StoreCMO",
  tagline: "Your AI CMO for ecommerce.",
  description:
    "StoreCMO is an AI CMO being built for ecommerce brands: marketing strategy, ecommerce SEO, content, competitor research, conversion, paid acquisition, and retention without a large marketing team.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://storecmo.com",
  locale: "en_US",
  /** Optional public contact address. Leave empty to hide mailto links. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  /** Public profiles used for schema.org sameAs and the footer. Leave empty to hide. */
  social: {
    x: "https://x.com/EICWOGUP",
  },
  author: {
    name: "Anand Yadav",
    role: "Founder, StoreCMO",
    url: "https://x.com/EICWOGUP",
    bio: "Anand Yadav has been building websites since 2009 and has worked in SEO and digital marketing throughout that time. He is building StoreCMO to give ecommerce brands the strategic thinking and execution of a marketing team without the overhead of hiring one.",
  },
};

export const navigation = [
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Playbook" },
  { href: "/about", label: "About" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const sameAs = Object.values(siteConfig.social).filter(Boolean);
