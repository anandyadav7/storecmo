import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StoreCMO Playbook article";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export default async function ArticleOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "StoreCMO Playbook";
  const category = post?.category ?? "Playbook";
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f7f5f0", color: "#15140f", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>
          <div style={{ display: "flex" }}>Store<span style={{ color: "#0e6b43" }}>CMO</span></div>
          <div style={{ fontSize: 20, fontWeight: 500, color: "#6b675e", letterSpacing: "2px", textTransform: "uppercase" }}>{category}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: title.length > 60 ? 58 : 68, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#6b675e" }}>The StoreCMO Playbook · Ecommerce marketing for lean teams</div>
        </div>
        <div style={{ height: 6, width: 160, background: "#0e6b43" }} />
      </div>
    ),
    size,
  );
}
