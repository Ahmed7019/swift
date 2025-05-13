"use client"
import { useState } from "react"

export default function OptimizedImage({ src, alt, width, height, className, priority = false }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${className} ${isLoading ? "bg-gray-800 animate-pulse" : ""}`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
    >
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
          <span>{alt || "صورة غير متوفرة"}</span>
        </div>
      ) : (
        <img
          src={src || "/placeholder.png"}
          alt={alt || "صورة"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}
