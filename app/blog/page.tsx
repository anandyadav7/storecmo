import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import PostList from "@/components/post-list";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "The StoreCMO Playbook: ecommerce marketing for lean teams";
const description =
  "Practical guides to ecommerce marketing strategy, ecommerce SEO, Shopify marketing, conversion optimization, paid acquisition, retention, competitor analysis, and AI marketing for online stores.";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Playbook", description, path: "/blog" }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
};

const topics = ["Ecommerce marketing", "Ecommerce SEO", "Shopify marketing", "Conversion optimization", "Paid acquisition", "Retention", "Competitor analysis", "AI marketing", "Ecommerce growth"];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Playbook", path: "/blog" },
];

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow">The playbook</p>
        <h1 className="h1">Ecommerce marketing, explained for lean teams.</h1>
        <p className="lead">
          Free, practical guides for founders and small teams running an online store&apos;s marketing. Each article answers one real question, shows the reasoning, and gives you something to do this week.
        </p>
        <p className="status-row" aria-label="Topics covered">
          {topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </p>
      </section>
      <section className="section section-rule" aria-label="All articles">
        <div className="shell">
          <PostList posts={posts} headingLevel="h2" />
        </div>
      </section>
      <CtaBand source="blog" heading="Get the product when it is ready, not another newsletter." />
      <JsonLd data={[webPageSchema({ type: "CollectionPage", name: title, description, path: "/blog" }), breadcrumbSchema(crumbs)]} />
    </>
  );
}
