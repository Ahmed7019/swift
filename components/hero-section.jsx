"use client"
import Link from "next/link"
import { Zap } from "lucide-react"
import OptimizedMotion from "./optimized-motion"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 w-full overflow-hidden">
            <OptimizedMotion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center md:justify-end">
                  <div className="flex items-center">
                    <Zap className="text-emerald-400 h-10 w-10 mr-2" />
                    <span className="text-4xl font-bold text-emerald-400" style={{ fontFamily: "Arial, sans-serif" }}>
                      Swift
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                <span className="text-emerald-400">رسالتنا</span> هي تمكين العلامات التجارية
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                نمكن العلامات التجارية من تحقيق أقصى إمكاناتها من خلال تقديم محتوى مبتكر، استراتيجيات فعّالة، وشراكات
                مستدامة تسهم في بناء صورة قوية في السوق.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 md:gap-4">
                <OptimizedMotion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href="#contact"
                    className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md shadow-lg shadow-emerald-900/30 hover:bg-emerald-500 transition-colors"
                  >
                    تواصل معنا
                  </Link>
                </OptimizedMotion>
                <OptimizedMotion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    href="#services"
                    className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-gray-800 text-emerald-400 font-medium rounded-md shadow-lg shadow-emerald-900/20 border border-emerald-800 hover:bg-gray-700 transition-colors"
                  >
                    خدماتنا
                  </Link>
                </OptimizedMotion>
              </div>
            </OptimizedMotion>
          </div>

          <div className="md:w-1/2 w-full overflow-hidden">
            <OptimizedMotion
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-gray-950/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                      مع شركة سويفت، النجاح ليس مجرد هدف، بل أسلوب حياة
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      إذا كنت تبحث عن فريق يُترجم أفكارك إلى نتائج، نحن هنا لتقديم حلول مميزة تحقق طموحاتك. دعنا نكون
                      شركاء في رحلتك نحو النجاح!
                    </p>
                  </div>
                </div>
              </div>
            </OptimizedMotion>
          </div>
        </div>
      </div>
    </section>
  )
}
