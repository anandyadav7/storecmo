import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StoreCMO: Your AI CMO for ecommerce";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f3f5f0", color: "#1c211b", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>Store<span style={{ color: "#0f8a5f" }}>CMO</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1 }}>Your AI CMO for ecommerce.</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#8a927f", maxWidth: 900 }}>Growth opportunities, marketing strategy, and faster execution for lean ecommerce teams. In development.</div>
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
