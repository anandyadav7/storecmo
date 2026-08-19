import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StoreCMO — Your AI CMO for ecommerce";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f7f5f0", color: "#15140f", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>Store<span style={{ color: "#0e6b43" }}>CMO</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-5px", lineHeight: 1 }}>Your AI CMO for ecommerce.</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#6b675e", maxWidth: 900 }}>Growth opportunities, marketing strategy, and faster execution for lean ecommerce teams. In development.</div>
        </div>
        <div style={{ height: 6, width: 160, background: "#0e6b43" }} />
      </div>
    ),
    size,
  );
}
