"use client"
import { PenTool, FileText, Video, BarChart2, Instagram, Users } from "lucide-react"
import OptimizedMotion from "./optimized-motion"
import LazyComponent from "./lazy-component"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "التصميم الجرافيكي",
      description: ["تصميم بصري احترافي يعكس هوية العلامة التجارية.", "تصميم شعارات، هوية بصرية، وبوسترات جذابة."],
      icon: PenTool,
    },
    {
      id: 2,
      title: "صناعة المحتوى",
      description: [
        "إنتاج محتوى مبتكر ومخصص لكل منصة من منصات التواصل الاجتماعي.",
        "كتابة نصوص جذابة وقصص تعزز ارتباط الجمهور بالعلامة التجارية.",
      ],
      icon: FileText,
    },
    {
      id: 3,
      title: "تصوير الفيديوهات",
      description: [
        "تصوير فيديوهات عالية الجودة تشمل الإعلانات الترويجية وقصص العلامات التجارية.",
        "مونتاج احترافي وإضافة تأثيرات بصرية مبتكرة.",
      ],
      icon: Video,
    },
    {
      id: 4,
      title: "وضع الخطط الاستراتيجية",
      description: [
        "تصميم خطط تسويقية شاملة لتحقيق الأهداف قصيرة وطويلة المدى.",
        "تحديد الجمهور المستهدف وتحليل السوق لضمان النجاح.",
      ],
      icon: BarChart2,
    },
    {
      id: 5,
      title: "إدارة برامج التواصل الاجتماعي",
      description: ["إدارة حسابات العلامات التجارية باحترافية.", "تحليل الأداء وتحسين التفاعل مع الجمهور."],
      icon: Instagram,
    },
    {
      id: 6,
      title: "التنسيق مع المؤثرين",
      description: ["تنظيم حملات مؤثرة بالتعاون مع فريق مؤثرينا المتميزين لضمان الوصول إلى جمهور أوسع."],
      icon: Users,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">خدماتنا</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الاحترافية لمساعدة علامتك التجارية على النمو والتميز في السوق
          </p>
        </OptimizedMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full">
          {services.map((service, index) => (
            <LazyComponent key={service.id} threshold={0.1} rootMargin="100px">
              <OptimizedMotion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg shadow-emerald-900/10 border border-gray-800 hover:border-emerald-800 transition-colors h-full"
              >
                <article>
                  <div className="w-16 h-16 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
                    <service.icon size={32} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.description.map((item, index) => (
                      <li key={index} className="text-gray-400 flex items-start">
                        <span className="text-emerald-400 ml-2" aria-hidden="true">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </OptimizedMotion>
            </LazyComponent>
          ))}
        </div>
      </div>
    </section>
  )
}
