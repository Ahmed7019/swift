"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, m } from "framer-motion";
import Motion from "./Motion";
export default function OptimizedMotion({
  children,
  initial,
  animate,
  transition,
  className,
  viewport = { once: true, amount: 0.3 },
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // إذا كان المستخدم يفضل تقليل الحركة، نتخطى الرسوم المتحركة
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    // إنشاء IntersectionObserver لاكتشاف متى يظهر العنصر في نطاق الرؤية
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // إلغاء المراقبة بعد ظهور العنصر إذا كان viewport.once صحيحًا
          if (viewport.once) {
            observer.disconnect();
          }
        } else if (!viewport.once) {
          // إذا خرج العنصر من نطاق الرؤية وكان viewport.once خاطئًا، نعيد تعيين الحالة
          setIsInView(false);
        }
      },
      {
        threshold: viewport.amount || 0.3,
        rootMargin: viewport.margin || "0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [prefersReducedMotion, viewport]);

  // إذا كان المستخدم يفضل تقليل الحركة، نعرض المحتوى بدون رسوم متحركة
  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}
