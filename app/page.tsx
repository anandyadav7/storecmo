import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import PlatformMarquee from "@/components/platform-marquee";
import PostList from "@/components/post-list";
import WaitlistForm from "@/components/waitlist-form";
import { getAllPosts } from "@/lib/blog";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

const weeklyQuestions = [
  { area: "Strategy", question: "Where should next quarter's growth come from: new customers, repeat orders, or a higher average order?" },
  { area: "SEO", question: "Which collection and product pages could rank, but don't yet?" },
  { area: "Content", question: "What should we publish this month, and for whom?" },
  { area: "Competitors", question: "What did the five stores we lose sales to change this month?" },
  { area: "Conversion", question: "Why do visitors leave the product page without adding to cart?" },
  { area: "Paid", question: "Which campaigns deserve more budget, and which should stop?" },
  { area: "Retention", question: "Who is about to lapse, and what brings them back for a second order?" },
  { area: "Growth", question: "What is the one thing that would move revenue most in the next 90 days?" },
];

const audiences = [
  {
    title: "The founder who is also the marketer",
    body: "You know the product and the customer better than anyone. You have two hours a week for marketing, and they go to whatever is loudest.",
  },
  {
    title: "The one- or two-person marketing team",
    body: "You are expected to cover SEO, email, paid, content, and the site itself, and to be strategic about all of it. Nobody has time to step back.",
  },
  {
    title: "The brand between agencies",
    body: "You have hired help before. You got deliverables, not a strategy, and nobody owned the whole picture of the store.",
  },
];

const steps = [
  {
    title: "Understand your store",
    body: "Your products, customers, channels, margins, and competitors, so every recommendation starts from your context instead of generic best practice.",
  },
  {
    title: "Find what is worth doing",
    body: "A ranked view of opportunities across SEO, conversion, paid, content, and retention, with the reasoning behind each one written out.",
  },
  {
    title: "Plan, then help execute",
    body: "A marketing strategy you can actually run: priorities, briefs, content, and campaigns, produced with you rather than handed over as a to-do list.",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <section className="shell hero" aria-labelledby="hero-heading">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--accent">
            <span className="status-dot" aria-hidden="true" />
            In development · For ecommerce brands
          </p>
          <h1 className="h1" id="hero-heading">Your AI CMO for ecommerce.</h1>
          <p className="lead">
            StoreCMO helps lean ecommerce teams find growth opportunities, build better marketing strategies, and execute faster with AI.
          </p>
          <div className="hero__form" id="waitlist">
            <WaitlistForm source="home-hero" />
          </div>
          <div className="hero__secondary">
            <Link href="/blog" className="text-link">Explore the playbook →</Link>
          </div>
        </div>

        <aside className="ledger" aria-labelledby="ledger-heading">
          <div className="ledger__head">
            <span id="ledger-heading">The questions a CMO answers every week</span>
            <span aria-hidden="true">Ecommerce</span>
          </div>
          <ul className="ledger__list">
            {weeklyQuestions.map((item) => (
              <li className="ledger__row" key={item.area}>
                <span className="ledger__label">{item.area}</span>
                <span className="ledger__q">{item.question}</span>
              </li>
            ))}
          </ul>
          <p className="ledger__foot">StoreCMO is being built to answer these for your store, and then help you act on the answers.</p>
        </aside>
      </section>

      <PlatformMarquee />

      <section className="section section-rule" aria-labelledby="audience-heading">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Who it is for</p>
              <h2 className="h2" id="audience-heading">Made for lean ecommerce teams.</h2>
            </div>
            <p className="lead">Most stores do not need more tools. They need someone to decide what matters this month, and help getting it done.</p>
          </div>
          <div className="audience">
            {audiences.map((item) => (
              <div className="audience__item" key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-heading">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">How it is designed to work</p>
              <h2 className="h2" id="approach-heading">Strategy first. Then execution.</h2>
            </div>
            <p className="lead">An AI CMO is not another dashboard to check. StoreCMO is designed to work the way a good marketing lead works: understand the store, decide what matters, then help ship it.</p>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li className="steps__item" key={step.title}>
                <span className="steps__num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="h3">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="section-foot">
            <Link href="/product" className="text-link">See what is being built →</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="playbook-heading">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">The playbook</p>
              <h2 className="h2" id="playbook-heading">Ecommerce marketing, explained for lean teams.</h2>
            </div>
            <p className="lead">Free, practical guides on strategy, SEO, conversion, paid acquisition, retention, and AI, written for the people who actually run a store&apos;s marketing.</p>
          </div>
          <PostList posts={posts} />
          <p className="section-foot">
            <Link href="/blog" className="text-link">All articles →</Link>
          </p>
        </div>
      </section>

      <CtaBand source="home-footer" />
      <JsonLd data={webPageSchema({ name: `${siteConfig.name} — ${siteConfig.tagline}`, description: siteConfig.description, path: "/" })} />
    </>
  );
}
