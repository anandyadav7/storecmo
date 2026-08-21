import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { tools } from "@/lib/tools";

const title = "Free ecommerce tools";
const description =
  "Free calculators and generators for ecommerce marketing: profit margin, break-even ROAS, LTV:CAC, AOV, free shipping thresholds, and meta tags. No signup, runs in your browser.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/tools",
  keywords: ["free ecommerce tools", "ecommerce calculators", "ecommerce marketing tools"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Free tools", path: "/tools" },
];

export default function ToolsPage() {
  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow eyebrow--accent">
          <span className="status-dot" aria-hidden="true" />
          Free tools · No signup
        </p>
        <h1 className="h1">The numbers behind your marketing, worked out.</h1>
        <p className="lead">
          Six free tools for the calculations every store keeps redoing in a spreadsheet: real profit margin, break-even ROAS, what a customer is worth, and where a free-shipping threshold should sit. Everything runs in your browser — nothing you type is stored or sent anywhere.
        </p>
      </section>

      <section className="section section-rule" aria-label="All tools">
        <div className="shell">
          <ol className="tool-index">
            {tools.map((tool, index) => (
              <li className="tool-index__row" key={tool.slug}>
                <span className="tool-index__num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <Link href={`/tools/${tool.slug}`} className="tool-index__name">
                    {tool.name}
                  </Link>
                  <p className="tool-index__desc">{tool.description}</p>
                </div>
                <span className="tool-index__tag">{tool.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-why-heading">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">Why these exist</p>
            <h2 className="h2" id="tools-why-heading">Built by the team building an AI CMO.</h2>
          </div>
          <div>
            <p className="lead">
              These are the calculations StoreCMO is being built to run continuously for your store. Until it ships, they work fine by hand — each tool explains its formula, states its assumptions, and links to the playbook article that goes deeper.
            </p>
            <p className="section-foot">
              <Link href="/blog" className="text-link">Read the playbook →</Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand source="tools" heading="Want these numbers watched for you?" />
      <JsonLd
        data={[
          webPageSchema({ type: "CollectionPage", name: title, description, path: "/tools" }),
          breadcrumbSchema(crumbs),
          itemListSchema(tools.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` }))),
        ]}
      />
    </>
  );
}
