import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist on StoreCMO.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell page-head" style={{ paddingBottom: "var(--section-y)" }}>
      <p className="eyebrow">404</p>
      <h1 className="h1">That page is not here.</h1>
      <p className="lead">The link may be out of date. The playbook is the best place to pick up from.</p>
      <div className="hero__secondary">
        <Link href="/blog" className="button button--primary">Explore the playbook</Link>
        <Link href="/" className="text-link">Back to home →</Link>
      </div>
    </section>
  );
}
