import "./globals.css"
import { Suspense } from "react"
import Loading from "./loading"
import { AnimationProvider } from "@/components/animation-provider"

export const metadata = {
  title: {
    default: "سويفت - خدمات التسويق الرقمي المبتكرة في مصر",
    template: "%s | سويفت للتسويق الرقمي",
    absolute: "Swift - Innovative Digital Marketing Services in Egypt | سويفت للتسويق الرقمي",
  },
  description: {
    default:
      "شركة سويفت المتخصصة في خدمات التسويق الرقمي، التصميم الجرافيكي، صناعة المحتوى وإدارة وسائل التواصل الاجتماعي في مصر",
    en: "Swift specializes in digital marketing services, graphic design, content creation, and social media management in Egypt",
  },
  keywords: [
    "تسويق رقمي",
    "تصميم جرافيكي",
    "صناعة محتوى",
    "إدارة وسائل التواصل الاجتماعي",
    "سويفت",
    "مصر",
    "القاهرة",
    "digital marketing",
    "graphic design",
    "content creation",
    "social media management",
    "Swift",
    "Egypt",
    "Cairo",
  ],
  authors: [{ name: "سويفت للتسويق الرقمي", url: "https://swift-eg.com" }],
  creator: "Swift Digital Marketing",
  publisher: "Swift Digital Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://swift-eg.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "سويفت - خدمات التسويق الرقمي المبتكرة في مصر | Swift Digital Marketing Egypt",
    description: {
      ar: "شركة سويفت المتخصصة في خدمات التسويق الرقمي، التصميم الجرافيكي، صناعة المحتوى وإدارة وسائل التواصل الاجتماعي",
      en: "Swift specializes in digital marketing services, graphic design, content creation, and social media management in Egypt",
    },
    url: "https://swift-eg.com",
    siteName: "Swift Digital Marketing | سويفت للتسويق الرقمي",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/swift-og-image.png",
        width: 1200,
        height: 630,
        alt: "Swift Digital Marketing Egypt | سويفت للتسويق الرقمي مصر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Digital Marketing Egypt | سويفت للتسويق الرقمي مصر",
    description: {
      ar: "شركة سويفت المتخصصة في خدمات التسويق الرقمي، التصميم الجرافيكي، صناعة المحتوى وإدارة وسائل التواصل الاجتماعي",
      en: "Swift specializes in digital marketing services, graphic design, content creation, and social media management in Egypt",
    },
    images: ["/images/swift-og-image.png"],
    creator: "@SwiftEgypt",
    site: "@SwiftEgypt",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  other: {
    "google-site-verification": "verification_token",
    "msvalidate.01": "microsoft_verification_token",
    "facebook-domain-verification": "facebook_verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Alternate language version */}
        <link rel="alternate" hrefLang="en" href="https://swift-eg.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://swift-eg.com" />
        <link rel="alternate" hrefLang="x-default" href="https://swift-eg.com" />
      </head>
      <body>
        <AnimationProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </AnimationProvider>
      </body>
    </html>
  )
}
