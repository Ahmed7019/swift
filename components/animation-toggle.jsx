"use client"
import { useState } from "react"
import { Zap, ZapOff } from "lucide-react"
import { motion,m } from "framer-motion"
import { useAnimation } from "./animation-provider"

export default function AnimationToggle() {
  const { animationsEnabled, setAnimationsEnabled } = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled)
    // حفظ التفضيل في localStorage
    localStorage.setItem("animationsEnabled", (!animationsEnabled).toString())
  }

  return (
    <m.button
      onClick={toggleAnimations}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      aria-label={animationsEnabled ? "تعطيل الرسوم المتحركة" : "تفعيل الرسوم المتحركة"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {animationsEnabled ? (
        <Zap size={24} className="text-emerald-400" />
      ) : (
        <ZapOff size={24} className="text-gray-400" />
      )}

      {isHovered && (
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-900 text-white text-sm py-1 px-3 rounded shadow-lg"
        >
          {animationsEnabled ? "تعطيل الرسوم المتحركة" : "تفعيل الرسوم المتحركة"}
        </m.div>
      )}
    </m.button>
  )
}
