"use client"
import { useState } from "react"

export default function FallbackImage({ src, alt, className, style }) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
          <span>صورة غير متوفرة</span>
        </div>
      ) : (
        <img
          src={src || "/placeholder.png"}
          alt={alt || "صورة"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
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
