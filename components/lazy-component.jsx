"use client"
import { useEffect, useState, useRef } from "react"

export default function LazyComponent({ children, placeholder, threshold = 0.1, rootMargin = "100px" }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin, // إضافة هامش لبدء التحميل قبل وصول العنصر لنطاق الرؤية
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className="min-h-[50px]">
      {isVisible ? children : placeholder || <div className="h-40 bg-gray-800 animate-pulse rounded-lg" />}
    </div>
  )
}
