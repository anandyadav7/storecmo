import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  /** Optional overrides; fall back to title/description. */
  seoTitle: string;
  seoDescription: string;
  content: string;
  wordCount: number;
};

const REQUIRED_FIELDS = ["title", "description", "publishedAt", "category", "tags"] as const;
const DEFAULT_DIRECTORY = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 230;

function unquote(value: string) {
  return value.replace(/^(["'])(.*)\1$/, "$2");
}

/** Parses a minimal `key: value` frontmatter block. No nesting, no YAML dependency. */
function parseFrontmatter(source: string, fileName: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${fileName}`);
  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    fields[line.slice(0, separator).trim()] = unquote(line.slice(separator + 1).trim());
  }
  return { fields, body: match[2].trim() };
}

export function parsePost(source: string, fileName: string): BlogPost {
  const { fields, body } = parseFrontmatter(source, fileName);
  for (const field of REQUIRED_FIELDS) {
    if (!fields[field]) throw new Error(`Missing required frontmatter field "${field}" in ${fileName}`);
  }
  return {
    slug: fileName.replace(/\.md$/, ""),
    title: fields.title,
    description: fields.description,
    publishedAt: fields.publishedAt,
    updatedAt: fields.updatedAt || fields.publishedAt,
    category: fields.category,
    tags: fields.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    seoTitle: fields.seoTitle || fields.title,
    seoDescription: fields.seoDescription || fields.description,
    content: body,
    wordCount: body.split(/\s+/).filter(Boolean).length,
  };
}

export function getAllPosts(directory = DEFAULT_DIRECTORY): BlogPost[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parsePost(fs.readFileSync(path.join(directory, file), "utf8"), file))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string, directory = DEFAULT_DIRECTORY) {
  return getAllPosts(directory).find((post) => post.slug === slug);
}

export function readingTimeMinutes(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(`${date}T12:00:00Z`),
  );
}
