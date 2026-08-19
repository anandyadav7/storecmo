import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaBand from "@/components/cta-band";
import JsonLd from "@/components/json-ld";
import MarkdownArticle, { articleHeadings } from "@/components/markdown-article";
import PostList from "@/components/post-list";
import { formatDate, getAllPosts, getPost, readingTimeMinutes } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    image: `/blog/${post.slug}/opengraph-image`,
    imageAlt: post.title,
    keywords: post.tags,
    article: { publishedTime: post.publishedAt, modifiedTime: post.updatedAt, section: post.category, tags: post.tags },
  });
}

export default async function BlogArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = articleHeadings(post.content);
  const related = getAllPosts().filter((candidate) => candidate.slug !== post.slug).slice(0, 2);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Playbook", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <article>
        <header className="shell article-head">
          <Breadcrumbs crumbs={crumbs.slice(0, 2)} />
          <p className="eyebrow eyebrow--accent">{post.category}</p>
          <h1 className="h1">{post.title}</h1>
          <p className="lead">{post.description}</p>
          <div className="byline">
            <span>
              By <a href={siteConfig.author.url} target="_blank" rel="noreferrer author">{siteConfig.author.name}</a>
            </span>
            <span>
              Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            {post.updatedAt !== post.publishedAt && (
              <span>
                Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
              </span>
            )}
            <span>{readingTimeMinutes(post.wordCount)} min read</span>
          </div>
        </header>

        <div className="shell article-layout">
          <div>
            <div className="prose">
              <MarkdownArticle content={post.content} />
            </div>
            <div className="tags" aria-label="Topics">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="author-card article-author">
              <span className="eyebrow" style={{ marginBottom: 4 }}>About the author</span>
              <span className="name">{siteConfig.author.name}</span>
              <span className="role">{siteConfig.author.role}</span>
              <p>{siteConfig.author.bio}</p>
            </div>
          </div>
          {headings.length > 1 && (
            <nav className="toc" aria-labelledby="toc-heading">
              <p className="toc__title" id="toc-heading">On this page</p>
              <ol>
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section-rule" aria-labelledby="related-heading">
          <div className="shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2 className="h2" id="related-heading">More from the playbook.</h2>
              </div>
              <p className="lead">
                <Link href="/blog" className="text-link">All articles →</Link>
              </p>
            </div>
            <PostList posts={related} />
          </div>
        </section>
      )}

      <CtaBand source={`article-${post.slug}`} heading="Want an AI CMO that does this for your store?" />
      <JsonLd data={[articleSchema(post), breadcrumbSchema(crumbs), faqSchema(post)]} />
    </>
  );
}
