"use client"
import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { AnimatePresence, m } from "framer-motion"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // عرض الزر عندما يتم التمرير لأسفل بمقدار 300 بكسل
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="العودة إلى الأعلى"
        >
          <ChevronUp size={24} />
        </m.button>
      )}
    </AnimatePresence>
  )
}
