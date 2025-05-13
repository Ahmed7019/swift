"use client"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import GoalsSection from "@/components/goals-section"
import AchievementsSection from "@/components/achievements-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import PortfolioSection from "@/components/portfolio-section"
import JsonLd from "@/components/json-ld"
import ScrollToTop from "@/components/scroll-to-top"
import AnimationToggle from "@/components/animation-toggle"
import Loading from "./loading"
import { OptimizedParallaxProvider } from "@/components/optimized-parallax"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-right" dir="rtl">
      <JsonLd />
      <Header />
      <main>
        <OptimizedParallaxProvider>
          <HeroSection />
          <Suspense fallback={<Loading />}>
            <ServicesSection />
            <GoalsSection />
            <AchievementsSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
          </Suspense>
        </OptimizedParallaxProvider>
      </main>
      <Footer />
      <ScrollToTop />
      <AnimationToggle />
    </div>
  )
}
