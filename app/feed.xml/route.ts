import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const escape = (value: string) => value.replace(/[<>&'"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] as string);

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `<item><title>${escape(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escape(post.description)}</description><category>${escape(post.category)}</category><pubDate>${new Date(`${post.publishedAt}T12:00:00Z`).toUTCString()}</pubDate></item>`;
    })
    .join("");
  const lastBuild = posts[0] ? new Date(`${posts[0].publishedAt}T12:00:00Z`).toUTCString() : new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escape(siteConfig.name)} Playbook</title><link>${absoluteUrl("/blog")}</link><atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" /><description>${escape("Ecommerce marketing strategy, SEO, conversion, paid acquisition, retention, and AI marketing for lean ecommerce teams.")}</description><language>en-us</language><lastBuildDate>${lastBuild}</lastBuildDate>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
