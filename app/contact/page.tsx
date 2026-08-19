import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Contact StoreCMO";
const description = "Questions about StoreCMO, the playbook, early access, or partnerships. Send a message and a person will read it.";

export const metadata: Metadata = pageMetadata({ title: "Contact", description, path: "/contact" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow">Contact</p>
        <h1 className="h1">Get in touch.</h1>
        <p className="lead">StoreCMO is a small team building in the open. Messages go straight to the people building it, and a person reads every one.</p>
      </section>

      <section className="section section-rule">
        <div className="shell two-col">
          <ContactForm />
          <aside>
            <p className="eyebrow">Worth writing about</p>
            <ul className="aside-list">
              <li><strong>Early access.</strong> Tell us about your store, your team, and what you would want an AI CMO to take off your plate first.</li>
              <li><strong>Corrections.</strong> If something in the playbook is wrong or out of date, that is the most useful message you can send.</li>
              <li><strong>Partnerships and press.</strong> Agencies, Shopify apps, and writers covering ecommerce marketing: we are happy to talk.</li>
              <li><strong>What you are stuck on.</strong> Playbook topics come from real questions. If you are wrestling with a marketing decision for your store, we would like to hear it.</li>
            </ul>
            {siteConfig.contactEmail && (
              <p className="form-note" style={{ marginTop: 28 }}>
                Prefer email? <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              </p>
            )}
            <p className="form-note" style={{ marginTop: 28 }}>No support desk yet, because there is no product to support yet. Guest-post pitches and link exchanges are politely declined.</p>
          </aside>
        </div>
      </section>

      <JsonLd data={[webPageSchema({ type: "ContactPage", name: title, description, path: "/contact" }), breadcrumbSchema(crumbs)]} />
    </>
  );
}
