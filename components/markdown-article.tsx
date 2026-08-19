import Link from "next/link";
import { Fragment } from "react";
import { parseInline, parseMarkdown, type Block } from "@/lib/markdown";

export function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((node, index) => {
        switch (node.type) {
          case "strong":
            return <strong key={index}>{node.text}</strong>;
          case "code":
            return <code key={index}>{node.text}</code>;
          case "link":
            return node.href.startsWith("/") ? (
              <Link key={index} href={node.href}>{node.text}</Link>
            ) : (
              <a key={index} href={node.href} rel="noopener">{node.text}</a>
            );
          case "image":
            // Article images are authored per post and may be remote; plain <img> keeps the renderer dependency-free.
            // eslint-disable-next-line @next/next/no-img-element
            return <img key={index} src={node.src} alt={node.alt} loading="lazy" />;
          default:
            return <Fragment key={index}>{node.text}</Fragment>;
        }
      })}
    </>
  );
}

function renderBlock(block: Block, index: number, isFirst: boolean) {
  switch (block.type) {
    case "h2":
      return <h2 key={index} id={block.id}><Inline text={block.text} /></h2>;
    case "h3":
      return <h3 key={index} id={block.id}><Inline text={block.text} /></h3>;
    case "p":
      return <p key={index} className={isFirst ? "prose-lead" : undefined}><Inline text={block.text} /></p>;
    case "ul":
      return <ul key={index}>{block.items.map((item, i) => <li key={i}><Inline text={item} /></li>)}</ul>;
    case "ol":
      return <ol key={index}>{block.items.map((item, i) => <li key={i}><Inline text={item} /></li>)}</ol>;
    case "blockquote":
      return <blockquote key={index}><Inline text={block.text} /></blockquote>;
    case "code":
      return <pre key={index}><code className={block.language ? `language-${block.language}` : undefined}>{block.code}</code></pre>;
    case "table":
      return (
        <div key={index} className="table-wrap">
          <table>
            <thead><tr>{block.headers.map((header, i) => <th key={i} scope="col"><Inline text={header} /></th>)}</tr></thead>
            <tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}><Inline text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      );
  }
}

export default function MarkdownArticle({ content }: { content: string }) {
  const blocks = parseMarkdown(content);
  return <>{blocks.map((block, index) => renderBlock(block, index, index === 0))}</>;
}

/** Headings for an "On this page" table of contents. */
export function articleHeadings(content: string) {
  return parseMarkdown(content).flatMap((block) => (block.type === "h2" ? [{ id: block.id, text: block.text }] : []));
}
