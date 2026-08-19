/**
 * A deliberately small Markdown subset for blog articles: headings (h2/h3),
 * paragraphs, bullet and numbered lists, blockquotes, fenced code, pipe tables,
 * and inline bold / code / links / images. Parsing is separated from rendering
 * so it can be unit-tested and reused for structured data.
 */

export type InlineNode =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "code"; text: string }
  | { type: "link"; text: string; href: string }
  | { type: "image"; alt: string; src: string };

export type Block =
  | { type: "h2" | "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] };

const INLINE_PATTERN = /(!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
const TABLE_DIVIDER = /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/;
const BLOCK_START = /^(## |### |> |[-*] |\d+\. |```|\|)/;

export function slugify(text: string) {
  return toPlainText(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseInline(text: string): InlineNode[] {
  return text
    .split(INLINE_PATTERN)
    .filter((piece) => piece !== "")
    .map((piece): InlineNode => {
      const image = piece.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (image) return { type: "image", alt: image[1], src: image[2] };
      const link = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) return { type: "link", text: link[1], href: link[2] };
      if (piece.startsWith("**") && piece.endsWith("**")) return { type: "strong", text: piece.slice(2, -2) };
      if (piece.startsWith("`") && piece.endsWith("`")) return { type: "code", text: piece.slice(1, -1) };
      return { type: "text", text: piece };
    });
}

export function toPlainText(markdown: string) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s*\n+\s*/g, " ")
    .trim();
}

export function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  const usedIds = new Map<string, number>();
  const headingId = (text: string) => {
    const base = slugify(text) || "section";
    const count = (usedIds.get(base) ?? 0) + 1;
    usedIds.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
  const parseRow = (row: string) => row.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index++;
      continue;
    }
    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index++;
      while (index < lines.length && !lines[index].startsWith("```")) code.push(lines[index++]);
      index++;
      blocks.push({ type: "code", language, code: code.join("\n") });
      continue;
    }
    if (line.startsWith("|") && index + 1 < lines.length && TABLE_DIVIDER.test(lines[index + 1])) {
      const headers = parseRow(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].startsWith("|")) rows.push(parseRow(lines[index++]));
      blocks.push({ type: "table", headers, rows });
      continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      blocks.push({ type: "h3", text, id: headingId(text) });
      index++;
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      blocks.push({ type: "h2", text, id: headingId(text) });
      index++;
      continue;
    }
    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith("> ")) quote.push(lines[index++].slice(2));
      blocks.push({ type: "blockquote", text: quote.join(" ") });
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*] /.test(lines[index])) items.push(lines[index++].slice(2).trim());
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\. /.test(lines[index])) items.push(lines[index++].replace(/^\d+\. /, "").trim());
      blocks.push({ type: "ol", items });
      continue;
    }
    const paragraph = [line.trim()];
    index++;
    while (index < lines.length && lines[index].trim() && !BLOCK_START.test(lines[index])) paragraph.push(lines[index++].trim());
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }
  return blocks;
}

export type FaqItem = { question: string; answer: string };

/** Pulls `### Question` / answer pairs from a `## Frequently asked questions` section. */
export function extractFaq(markdown: string): FaqItem[] {
  const blocks = parseMarkdown(markdown);
  const start = blocks.findIndex((block) => block.type === "h2" && /^frequently asked questions/i.test(block.text));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  for (const block of blocks.slice(start + 1)) {
    if (block.type === "h2") break;
    if (block.type === "h3") {
      items.push({ question: toPlainText(block.text), answer: "" });
      continue;
    }
    const current = items[items.length - 1];
    if (!current) continue;
    const text =
      block.type === "p" || block.type === "blockquote"
        ? toPlainText(block.text)
        : block.type === "ul" || block.type === "ol"
          ? block.items.map(toPlainText).join(" ")
          : "";
    if (text) current.answer = current.answer ? `${current.answer} ${text}` : text;
  }
  return items.filter((item) => item.answer);
}
