"use client"
import { useEffect, useState } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useAnimation } from "./animation-provider"

// تغيير التصدير من افتراضي إلى مسمى
export function OptimizedParallax({ children, speed, disabled = false, ...props }) {
  const [isMounted, setIsMounted] = useState(false)
  const { isReducedMotion, animationsEnabled } = useAnimation()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // تعطيل التأثير في الحالات التالية:
  // 1. إذا كان المستخدم يفضل تقليل الحركة
  // 2. إذا كانت الرسوم المتحركة معطلة عمومًا
  // 3. إذا كان التأثير معطلًا بشكل صريح
  // 4. إذا كنا في مرحلة التصيير الأولية على الخادم
  const isParallaxDisabled = isReducedMotion || !animationsEnabled || disabled || !isMounted

  if (isParallaxDisabled) {
    return <div {...props}>{children}</div>
  }

  return (
    <Parallax speed={speed} {...props}>
      {children}
    </Parallax>
  )
}

// مكون مزود ParallaxProvider المحسن
export function OptimizedParallaxProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false)
  const { isReducedMotion, animationsEnabled } = useAnimation()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // إذا كان المستخدم يفضل تقليل الحركة أو كانت الرسوم المتحركة معطلة، نعرض الأطفال مباشرة
  if (isReducedMotion || !animationsEnabled || !isMounted) {
    return <>{children}</>
  }

  return <ParallaxProvider>{children}</ParallaxProvider>
}
