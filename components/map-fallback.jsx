"use client"
import { MapPin } from "lucide-react"

export default function MapFallback() {
  return (
    <div className="w-full h-full min-h-[300px] bg-gray-800 rounded-lg flex flex-col items-center justify-center p-4">
      <div className="w-16 h-16 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
        <MapPin size={32} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">موقعنا</h3>
      <p className="text-gray-400 text-center">
        الرياض، المملكة العربية السعودية
        <br />
        <a
          href="https://maps.google.com/?q=24.7136,46.6753"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 mt-4 inline-block hover:underline"
        >
          فتح في خرائط Google
        </a>
      </p>
    </div>
  )
}
