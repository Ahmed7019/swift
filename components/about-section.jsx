"use client"
import OptimizedMotion from "./optimized-motion"
import LazyComponent from "./lazy-component"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <OptimizedMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">من نحن</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">نحن فريق من المبدعين المتخصصين في تقديم حلول تسويقية مبتكرة</p>
        </OptimizedMotion>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <LazyComponent threshold={0.1} rootMargin="100px">
            <OptimizedMotion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">دعوتنا لكم</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  مع شركة سويفت، النجاح ليس مجرد هدف، بل أسلوب حياة. إذا كنت تبحث عن فريق يُترجم أفكارك إلى نتائج، نحن
                  هنا لتقديم حلول مميزة تحقق طموحاتك. دعنا نكون شركاء في رحلتك نحو النجاح!
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800/50 px-4 py-2 rounded-md text-emerald-400">إبداع</div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-md text-emerald-400">ابتكار</div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-md text-emerald-400">احترافية</div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-md text-emerald-400">تميز</div>
                </div>
              </div>
            </OptimizedMotion>
          </LazyComponent>

          <LazyComponent threshold={0.1} rootMargin="100px">
            <OptimizedMotion
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-6">رسالتنا</h3>
                <p className="text-gray-300 leading-relaxed">
                  شركة سويفت متخصصة في صناعة المحتوى الإبداعي الذي يدعم العلامات التجارية والمحلات والشركات. نركز على
                  تقديم خدمات تعتمد على أسلوب UGC (محتوى مُنتج من قِبل المستخدم) وEGC (محتوى مُنتج من قِبل الموظفين)، مما
                  يعزز التفاعل مع الجمهور ويحقق أهداف العلامة التجارية. هدفنا الرئيسي هو تحويل الأفكار الإبداعية إلى
                  نجاحات ملموسة عبر رفع المبيعات وزيادة شعبية العلامة التجارية.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 h-full">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">رؤيتنا</h3>
                  <p className="text-gray-300">
                    أن نكون الشريك الأول للعلامات التجارية في رحلتها نحو النجاح والتميز في السوق الرقمي.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 h-full">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">قيمنا</h3>
                  <p className="text-gray-300">الإبداع، الاحترافية، الشفافية، الالتزام بالنتائج، والتطوير المستمر.</p>
                </div>
              </div>
            </OptimizedMotion>
          </LazyComponent>
        </div>
      </div>
    </section>
  )
}
