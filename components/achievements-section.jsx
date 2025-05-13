"use client"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import OptimizedMotion from "./optimized-motion"
import { OptimizedParallax, OptimizedParallaxProvider } from "./optimized-parallax"
import LazyComponent from "./lazy-component"

export default function AchievementsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const achievements = [
    {
      number: "+60M",
      title: "مشاهدة",
      description: "تحقيق أكثر من 60 مليون مشاهدة لمحتوى عملائنا",
    },
    {
      number: "+300K",
      title: "متابع",
      description: "زيادة عدد متابعي العلامات التجارية بما يتجاوز 300,000 متابع",
    },
    {
      number: "98%",
      title: "رضا العملاء",
      description: "نسبة رضا عملائنا عن خدماتنا المقدمة",
    },
  ]

  return (
    <OptimizedParallaxProvider>
      <section id="achievements" className="py-20 bg-gray-900 overflow-hidden" ref={ref}>
        <div className="container mx-auto px-4">
          <OptimizedMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">إنجازاتنا</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              بفضل التزامنا بالإبداع والابتكار، ساعدنا عملاءنا على تحقيق هذه الأرقام المميزة، وما زلنا مستمرين في تقديم
              الأفضل
            </p>
          </OptimizedMotion>

          <OptimizedParallax speed={-5}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 overflow-hidden">
              {achievements.map((item, index) => (
                <LazyComponent key={index} threshold={0.1} rootMargin="50px">
                  <OptimizedMotion
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-950 p-6 md:p-8 rounded-lg shadow-lg shadow-emerald-900/10 border border-gray-800 text-center h-full"
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">{item.number}</h3>
                    <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{item.title}</h4>
                    <p className="text-sm md:text-base text-gray-400">{item.description}</p>
                  </OptimizedMotion>
                </LazyComponent>
              ))}
            </div>
          </OptimizedParallax>

          <LazyComponent threshold={0.1} rootMargin="100px">
            <OptimizedParallax speed={5}>
              <div className="mt-16 md:mt-20 bg-gray-950 rounded-lg overflow-hidden border border-gray-800 max-w-full">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-12 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                      من خلال استراتيجيات تسويق مبتكرة ومحتوى يلهم الجمهور
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                      ساهمنا في بناء مجتمعات قوية وزيادة عدد المتابعين لعلاماتنا التجارية إلى أكثر من 300,000 متابع وما
                      زلنا نتوسع
                    </p>
                  </div>
                  <div className="bg-gray-900 p-6 md:p-0 flex items-center justify-center">
                    <div className="text-[120px] md:text-[180px] lg:text-[250px] font-bold text-green-400 select-none">
                      300K
                    </div>
                  </div>
                </div>
              </div>
            </OptimizedParallax>
          </LazyComponent>
        </div>
      </section>
    </OptimizedParallaxProvider>
  )
}
