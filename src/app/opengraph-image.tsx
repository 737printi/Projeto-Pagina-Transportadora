import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/constants";

export const alt = `${COMPANY.name} ${COMPANY.suffix}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#f8fafc",
            marginBottom: 16,
          }}
        >
          {`${COMPANY.name} ${COMPANY.suffix}`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          {COMPANY.slogan}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "12px 24px",
            background: "#3b82f6",
            borderRadius: 8,
            color: "#fff",
            fontSize: 20,
          }}
        >
          Logística B2B · Brasil
        </div>
      </div>
    ),
    { ...size }
  );
}
