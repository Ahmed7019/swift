"use client"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Zap } from "lucide-react"
import OptimizedMotion from "./optimized-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // تحديد القسم النشط للتنقل
      const sections = ["services", "goals", "achievements", "portfolio", "about", "contact"]
      let currentSection = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "الرئيسية", href: "#", id: "home" },
    { name: "خدماتنا", href: "#services", id: "services" },
    { name: "أهدافنا", href: "#goals", id: "goals" },
    { name: "إنجازاتنا", href: "#achievements", id: "achievements" },
    { name: "معرض أعمالنا", href: "#portfolio", id: "portfolio" },
    { name: "من نحن", href: "#about", id: "about" },
    { name: "تواصل معنا", href: "#contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/95 backdrop-blur-sm shadow-lg shadow-emerald-900/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <OptimizedMotion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center" aria-label="الصفحة الرئيسية لسويفت للتسويق الرقمي">
            <div className="flex items-center">
              <Zap className="text-emerald-400 h-8 w-8 mr-2" aria-hidden="true" />
              <span className="text-2xl font-bold text-emerald-400" style={{ fontFamily: "Arial, sans-serif" }}>
                Swift
              </span>
            </div>
          </Link>
        </OptimizedMotion>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 space-x-reverse" aria-label="التنقل الرئيسي">
          {isClient &&
            navLinks.map((link, index) => (
              <OptimizedMotion
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 transition-colors ${
                    activeSection === link.id ? "text-emerald-400 font-medium" : "text-gray-300 hover:text-emerald-400"
                  }`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </OptimizedMotion>
            ))}
          {isClient && (
            <OptimizedMotion
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="mr-4 px-5 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-colors"
                aria-label="تواصل معنا الآن"
              >
                تواصل الآن
              </Link>
            </OptimizedMotion>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 focus:outline-none p-2 rounded-md hover:bg-gray-800"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <OptimizedMotion
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 absolute left-0 right-0 z-20 shadow-lg"
            id="mobile-menu"
          >
            <div className="container mx-auto px-4 py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 border-b border-gray-800 text-lg ${
                    activeSection === link.id ? "text-emerald-400 font-medium" : "text-gray-300 hover:text-emerald-400"
                  }`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 mt-2 text-center bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-colors text-lg"
                aria-label="تواصل معنا الآن"
              >
                تواصل الآن
              </Link>
            </div>
          </OptimizedMotion>
        )}
      </AnimatePresence>
    </header>
  )
}
