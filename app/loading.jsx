export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 relative mb-4">
          <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-20 blur-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-200">Swift</span>
          </div>
        </div>
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
