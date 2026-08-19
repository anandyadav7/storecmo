import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "What StoreCMO is being built to do";
const description =
  "StoreCMO is an AI CMO for ecommerce, in development. See the marketing work it is being designed to cover: strategy, ecommerce SEO, content, competitor research, conversion, paid acquisition, retention, and growth.";

export const metadata: Metadata = pageMetadata({ title: "Product", description, path: "/product" });

const capabilities = [
  { name: "Marketing strategy", label: "Direction", body: "A clear, written plan for the store: which customers to win, which channels to lean on, and what to stop doing. Revisited as the numbers change, not once a year." },
  { name: "Ecommerce SEO", label: "Organic", body: "Collection, product, and guide pages that are built to rank: keyword mapping, on-page fixes, internal linking, and a content plan tied to what people actually search before they buy." },
  { name: "Content", label: "Organic", body: "Briefs and drafts for the pages, emails, and posts the strategy calls for, in the store's voice, with the reasoning for why each piece exists." },
  { name: "Competitor research", label: "Market", body: "What the stores you lose sales to are doing with pricing, offers, product pages, ads, and content, turned into decisions rather than a pile of screenshots." },
  { name: "Conversion optimization", label: "Site", body: "Where the funnel leaks, from landing page to checkout, and a prioritised list of tests and fixes with the expected impact on revenue." },
  { name: "Paid acquisition", label: "Paid", body: "Which campaigns, audiences, and creatives deserve more budget, which should stop, and what to test next, grounded in margin rather than vanity metrics." },
  { name: "Retention", label: "Lifecycle", body: "Email and lifecycle programs that bring customers back for a second and third order: welcome, post-purchase, replenishment, win-back." },
  { name: "Growth opportunities", label: "Priorities", body: "A ranked view of the few moves that would change the store's revenue most in the next quarter, across every area above, with the trade-offs spelled out." },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
];

export default function ProductPage() {
  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow eyebrow--accent">
          <span className="status-dot" aria-hidden="true" />
          Product · In development
        </p>
        <h1 className="h1">What StoreCMO is being built to do.</h1>
        <p className="lead">
          StoreCMO is an AI CMO built specifically for ecommerce. The goal is simple to say and hard to do: give a lean store team the strategic thinking and execution capability of a full marketing department, without hiring one.
        </p>
        <div className="status-row" aria-label="Current status">
          <span>Status: <b>In development</b></span>
          <span>Waitlist: <b>Open</b></span>
          <span>Playbook: <b>Live</b></span>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="scope-heading">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Scope</p>
              <h2 className="h2" id="scope-heading">The marketing work it is designed to cover.</h2>
            </div>
            <p className="lead">These are the areas StoreCMO is being built around. Nothing below is available yet; this is the plan we are building toward, and the waitlist is how you hear when the first pieces are ready.</p>
          </div>
          <dl className="caps">
            {capabilities.map((item) => (
              <div className="caps__row" key={item.name}>
                <dt>
                  {item.name}
                  <small>{item.label}</small>
                </dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">Principles</p>
            <h2 className="h2" id="principles-heading">What it will not be.</h2>
          </div>
          <ul className="aside-list">
            <li><strong>Not another dashboard.</strong> Store owners already have analytics. What is missing is someone to read them and decide what to do.</li>
            <li><strong>Not a chatbot with a marketing prompt.</strong> Generic advice is free. StoreCMO is being built to start from your products, customers, and competitors.</li>
            <li><strong>Not a replacement for your judgment.</strong> You know your brand. The aim is to make your decisions better informed and faster to act on.</li>
            <li><strong>Not a promise of results.</strong> Marketing has no guarantees. We would rather show you reasoning you can check than numbers you cannot.</li>
          </ul>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="meanwhile-heading">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">In the meantime</p>
            <h2 className="h2" id="meanwhile-heading">The playbook is live today.</h2>
          </div>
          <div>
            <p className="lead">While the product is being built, the StoreCMO playbook publishes the frameworks behind it: how to set an ecommerce marketing strategy, where to spend a small budget, and what AI is genuinely useful for in a store&apos;s marketing.</p>
            <p className="section-foot">
              <Link href="/blog" className="text-link">Read the playbook →</Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand source="product" heading="Hear first when StoreCMO is ready." />
      <JsonLd data={[webPageSchema({ name: title, description, path: "/product" }), breadcrumbSchema(crumbs)]} />
    </>
  );
}
