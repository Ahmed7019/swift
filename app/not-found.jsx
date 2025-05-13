export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4" dir="rtl">
      <div className="mb-8">
        <div className="text-4xl font-bold text-emerald-400">Swift</div>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">الصفحة غير موجودة</h2>
      <p className="text-gray-400 max-w-md mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>

      <a href="/" className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-colors">
        العودة للصفحة الرئيسية
      </a>
    </div>
  )
}
