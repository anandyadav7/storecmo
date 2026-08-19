import Link from "next/link";
import { formatDate, readingTimeMinutes, type BlogPost } from "@/lib/blog";

export default function PostList({ posts, headingLevel = "h3" }: { posts: BlogPost[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="post-row">
            <div className="post-row__meta">
              <b>{post.category}</b>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div>
              <Heading className="post-row__title">{post.title}</Heading>
              <p className="post-row__desc">{post.description}</p>
            </div>
            <span className="post-row__time">{readingTimeMinutes(post.wordCount)} min read</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
