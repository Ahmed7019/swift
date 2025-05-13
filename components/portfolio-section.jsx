"use client"
import { useState } from "react"
import OptimizedMotion from "./optimized-motion"
import LazyComponent from "./lazy-component"

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("الكل")

  const categories = ["الكل", "تصميم", "تسويق", "محتوى", "هوية بصرية"]

  const clients = [
    { id: 1, name: "شركة الفا", category: "تسويق" },
    { id: 2, name: "مجموعة بيتا", category: "تصميم" },
    { id: 3, name: "كوزمو", category: "محتوى" },
    { id: 4, name: "شركة دلتا", category: "هوية بصرية" },
    { id: 5, name: "مؤسسة جاما", category: "تسويق" },
    { id: 6, name: "شركة زيتا", category: "تصميم" },
    { id: 7, name: "مجموعة ثيتا", category: "محتوى" },
    { id: 8, name: "شركة لامدا", category: "هوية بصرية" },
    { id: 9, name: "مؤسسة سيجما", category: "تسويق" },
    { id: 10, name: "شركة أوميجا", category: "تصميم" },
    { id: 11, name: "مجموعة إبسيلون", category: "محتوى" },
    { id: 12, name: "شركة أوميكرون", category: "هوية بصرية" },
    { id: 13, name: "مؤسسة تاو", category: "تسويق" },
    { id: 14, name: "شركة فاي", category: "تصميم" },
  ]

  const filteredClients =
    activeCategory === "الكل" ? clients : clients.filter((client) => client.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">إنجازاتنا</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">العمل مع أكثر من 15 عميلاً في مختلف القطاعات</p>
        </OptimizedMotion>

        {/* فلتر التصنيفات */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <OptimizedMotion
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            </OptimizedMotion>
          ))}
        </div>

        {/* شبكة العملاء */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {filteredClients.map((client, index) => (
            <LazyComponent key={client.id}>
              <OptimizedMotion
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-full p-2 flex items-center justify-center aspect-square"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-gray-800 hover:border-emerald-800 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80"></div>
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    {/* استخدام حرف أول من اسم العميل بدلاً من الصورة */}
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-400 font-bold text-lg">
                      {client.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </OptimizedMotion>
            </LazyComponent>
          ))}
        </div>

        {/* قسم المشاريع */}
        <div className="mt-20">
          <OptimizedMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">بالنزول</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              ضمن مسيرتنا للمعرفة و إنتاج وتطوير محتوى رقمي مميز، تمكنّا من إطلاق برنامج "بالونزول" كأحد المشاريع
              الريادية التي تم تنفيذها بنجاح. وهي هذا البرنامج ضمن خطة استراتيجية لإنتاج عدد من البرامج القادمة، بما
              يعكس خبرتنا المتراكمة وإلمامنا بتقييم محتوى مبتكر يواكب تطلعات الجمهور.
            </p>
          </OptimizedMotion>

          <LazyComponent>
            <OptimizedMotion
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="relative aspect-video w-full max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-gray-950/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">برنامج بالنزول</h3>
                    <p className="text-gray-300">انقر لمشاهدة الفيديو التعريفي</p>
                  </div>
                </div>
              </div>
            </OptimizedMotion>
          </LazyComponent>
        </div>
      </div>
    </section>
  )
}
