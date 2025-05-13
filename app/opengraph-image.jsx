import { ImageResponse } from "next/og"

export const alt = "Swift Digital Marketing Egypt | سويفت للتسويق الرقمي مصر"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "#0a0a0f",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: 48,
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
            fontSize: 36,
            fontWeight: "bold",
            color: "#10b981",
          }}
        >
          S
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#10b981",
          }}
        >
          Swift
        </div>
      </div>
      <div style={{ fontSize: 36, marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>Digital Marketing Services in Egypt</span>
        <span>خدمات التسويق الرقمي في مصر</span>
      </div>
      <div style={{ fontSize: 24, color: "#9ca3af", maxWidth: 800 }}>
        <span style={{ marginRight: 16 }}>
          Graphic Design | Content Creation | Video Production | Social Media Management
        </span>
        <span>تصميم جرافيكي | صناعة محتوى | تصوير فيديوهات | إدارة وسائل التواصل الاجتماعي</span>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
