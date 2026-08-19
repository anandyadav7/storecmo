import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "About StoreCMO";
const description =
  "StoreCMO is being built to give ecommerce brands access to the strategic thinking and execution capability of a marketing team without the overhead of building a large one.";

export const metadata: Metadata = pageMetadata({ title: "About", description, path: "/about" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow">About</p>
        <h1 className="h1">Why StoreCMO exists.</h1>
        <p className="lead">{description}</p>
      </section>

      <section className="section section-rule">
        <div className="shell two-col">
          <div className="prose">
            <h2 className="h2" style={{ marginTop: 0 }}>The problem</h2>
            <p>
              An ecommerce store of almost any size is expected to do the work of a full marketing department: strategy, SEO, content, email, paid media, conversion, competitor tracking. Most stores do that work with one or two people, or with a founder who is also running operations, customer service, and purchasing.
            </p>
            <p>
              Hiring a real CMO is slow and expensive. Agencies bring execution but rarely own the whole picture of the store. Tools produce more data than anyone has time to read. The thing that is missing is not effort. It is someone whose job is to step back, decide what matters this month, and make sure it gets done.
            </p>
            <h2 className="h2">What StoreCMO is</h2>
            <p>
              StoreCMO is an AI CMO built specifically for ecommerce. Not a generic assistant with a marketing prompt, and not another dashboard: a system designed to understand a particular store, find the opportunities that would move its revenue most, turn them into a marketing strategy, and help the team execute it.
            </p>
            <p>
              It is being built for lean teams: the founder-marketer, the two-person growth team, the brand that has outgrown its agency. The aim is to make good marketing judgment available to stores that cannot yet afford to hire it.
            </p>
            <h2 className="h2">Where things stand</h2>
            <p>
              StoreCMO is in development. The <Link href="/product">product page</Link> describes what is being built. The <Link href="/blog">playbook</Link> is live now and publishes the thinking behind it. The <Link href="/#waitlist">waitlist</Link> is how you hear when the first ecommerce teams can get in.
            </p>
          </div>
          <aside>
            <div className="author-card">
              <span className="eyebrow" style={{ marginBottom: 4 }}>Who is building it</span>
              <span className="name">{siteConfig.author.name}</span>
              <span className="role">{siteConfig.author.role}</span>
              <p>{siteConfig.author.bio}</p>
              {siteConfig.author.url && (
                <a className="text-link small" href={siteConfig.author.url} target="_blank" rel="noreferrer" style={{ justifySelf: "start" }}>
                  Follow the build on X ↗
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand source="about" />
      <JsonLd data={[webPageSchema({ type: "AboutPage", name: title, description, path: "/about" }), breadcrumbSchema(crumbs)]} />
    </>
  );
}
