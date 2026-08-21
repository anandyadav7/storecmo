import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import ToolWidget from "@/components/tools/tool-widget";
import { getPost } from "@/lib/blog";
import { breadcrumbSchema, faqPageSchema, webApplicationSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getTool, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return pageMetadata({
    title: `${tool.name} (Free)`,
    description: tool.description,
    path: `/tools/${tool.slug}`,
    image: `/tools/${tool.slug}/opengraph-image`,
    imageAlt: tool.name,
    keywords: tool.keywords,
  });
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Free tools", path: "/tools" },
    { name: tool.name, path: `/tools/${tool.slug}` },
  ];
  const related = tool.related.map((relatedSlug) => getPost(relatedSlug)).filter((post) => post !== undefined);

  return (
    <>
      <section className="shell page-head">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow eyebrow--accent">
          <span className="status-dot" aria-hidden="true" />
          {tool.tag} · Free tool
        </p>
        <h1 className="h1">{tool.name}</h1>
        <p className="lead">{tool.intro}</p>
      </section>

      <section className="shell tool-stage" aria-label={tool.name}>
        <ToolWidget slug={tool.slug} />
      </section>

      <section className="section section-rule" aria-labelledby="tool-how-heading">
        <div className="shell">
          <div className="tool-article">
            <p className="eyebrow">The maths</p>
            <h2 className="h3" id="tool-how-heading">How is it calculated?</h2>
            <p className="tool-formula">{tool.formula}</p>
            {tool.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="h3">{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="tool-faq-heading">
        <div className="shell">
          <div className="tool-article">
            <p className="eyebrow">FAQ</p>
            <h2 className="h3" id="tool-faq-heading">Frequently asked questions</h2>
            {tool.faq.map((item) => (
              <div key={item.question}>
                <h3 className="tool-faq__q">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-rule" aria-labelledby="tool-related-heading">
          <div className="shell two-col">
            <div>
              <p className="eyebrow">Go deeper</p>
              <h2 className="h2" id="tool-related-heading">From the playbook.</h2>
            </div>
            <ul className="aside-list">
              {related.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-link">
                    {post.title}
                  </Link>
                  <p className="muted small" style={{ marginTop: 6 }}>{post.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand source={`tool-${tool.slug}`} heading="Want these numbers watched for you?" />
      <JsonLd
        data={[
          webPageSchema({ name: tool.name, description: tool.description, path: `/tools/${tool.slug}` }),
          webApplicationSchema({ name: tool.name, description: tool.description, path: `/tools/${tool.slug}` }),
          breadcrumbSchema(crumbs),
          faqPageSchema(tool.faq),
        ]}
      />
    </>
  );
}
