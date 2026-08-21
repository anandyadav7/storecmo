import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#103a2a", color: "#f0f6ee", borderRadius: 20, fontSize: 40, fontWeight: 700, fontFamily: "Helvetica, Arial, sans-serif", letterSpacing: "-2px" }}>
        S<span style={{ color: "#ff8a5c", fontSize: 22, marginTop: 10 }}>●</span>
      </div>
    ),
    size,
  );
}
