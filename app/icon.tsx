import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#15140f", color: "#f7f5f0", borderRadius: 12, fontSize: 40, fontWeight: 700, fontFamily: "Helvetica, Arial, sans-serif", letterSpacing: "-2px" }}>
        S<span style={{ color: "#3fbf7f", fontSize: 22, marginTop: 10 }}>▪</span>
      </div>
    ),
    size,
  );
}
