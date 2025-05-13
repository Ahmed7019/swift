"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

// إنشاء سياق للرسوم المتحركة
const AnimationContext = createContext({
  animationsEnabled: true,
  setAnimationsEnabled: () => {},
  isReducedMotion: false,
})

export function AnimationProvider({ children }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // استعادة تفضيلات المستخدم من localStorage
    const savedPreference = localStorage.getItem("animationsEnabled")
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === "true")
    }

    // التحقق من تفضيلات المستخدم لتقليل الحركة
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <AnimationContext.Provider
      value={{
        animationsEnabled: isClient ? animationsEnabled : true,
        setAnimationsEnabled,
        isReducedMotion: isClient ? isReducedMotion : false,
      }}
    >
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)
