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
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f3f5f0", color: "#1c211b", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>
          <div style={{ display: "flex" }}>Store<span style={{ color: "#0f8a5f" }}>CMO</span></div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#0b5c40", background: "#e2efe6", padding: "8px 20px", borderRadius: 999 }}>{category}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: title.length > 60 ? 58 : 68, fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#8a927f" }}>The StoreCMO Playbook · Ecommerce marketing for lean teams</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ height: 10, width: 120, background: "#0f8a5f", borderRadius: 999 }} />
          <div style={{ height: 10, width: 44, background: "#ff8a5c", borderRadius: 999 }} />
        </div>
      </div>
    ),
    size,
  );
}
