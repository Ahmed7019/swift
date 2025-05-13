"use client"
import { useState } from "react"

export default function SimpleImage({ src, alt, className, style, width, height, loading = "lazy" }) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // تحسين النص البديل للصور لمحركات البحث
  const enhancedAlt = alt || "صورة سويفت للتسويق الرقمي - خدمات التسويق الرقمي في المملكة العربية السعودية"

  return (
    <div
      className={`relative ${className}`}
      style={{
        ...style,
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
      }}
    >
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
          <span>{enhancedAlt}</span>
        </div>
      ) : (
        <img
          src={src || "/placeholder.png"}
          alt={enhancedAlt}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          loading={loading}
        />
      )}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
