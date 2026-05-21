import { ImageResponse } from "next/og";

/** Favicon dinâmico — logo minimalista NC */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e293b",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#3b82f6",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          NC
        </div>
      </div>
    ),
    { ...size }
  );
}
