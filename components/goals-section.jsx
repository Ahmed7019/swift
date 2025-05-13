"use client"
import { Lightbulb, Users, TrendingUp, CheckCircle } from "lucide-react"
import OptimizedMotion from "./optimized-motion"
import LazyComponent from "./lazy-component"

export default function GoalsSection() {
  const goals = [
    {
      icon: Lightbulb,
      title: "الابتكار المستمر",
      description: "تقديم حلول تسويقية مبتكرة تعتمد على أحدث الاتجاهات في مجال صناعة المحتوى",
    },
    {
      icon: Users,
      title: "بناء شراكات ناجحة",
      description: "تعزيز التعاون مع عملائنا لضمان تحقيق رؤيتهم وأهدافهم",
    },
    {
      icon: TrendingUp,
      title: "دعم النمو",
      description: "مساعدة عملائنا في زيادة المبيعات وبناء حضور قوي ومستدام على وسائل التواصل الاجتماعي",
    },
    {
      icon: CheckCircle,
      title: "تحقيق التميز",
      description: "تقديم محتوى يجذب الانتباه ويزيد من تفاعل الجمهور مع العلامة التجارية",
    },
  ]

  return (
    <section id="goals" className="py-20 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">أهدافنا</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نسعى دائماً لتحقيق أهداف محددة تضمن نجاح عملائنا وتميزهم في السوق
          </p>
        </OptimizedMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-full">
          {goals.map((goal, index) => (
            <LazyComponent key={index}>
              <OptimizedMotion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e9dcc3] bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-right overflow-hidden h-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 text-emerald-400 flex items-center justify-center">
                    <goal.icon size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{goal.title}</h3>
                <p className="text-gray-300">{goal.description}</p>
              </OptimizedMotion>
            </LazyComponent>
          ))}
        </div>
      </div>
    </section>
  )
}
