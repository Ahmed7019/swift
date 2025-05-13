"use client"

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "سويفت للتسويق الرقمي",
    alternateName: "Swift Digital Marketing",
    url: "https://swift-eg.com",
    logo: "https://swift-eg.com/images/logo.png",
    description: {
      "@language": "ar",
      "@value":
        "شركة سويفت المتخصصة في خدمات التسويق الرقمي، التصميم الجرافيكي، صناعة المحتوى وإدارة وسائل التواصل الاجتماعي في مصر",
    },
    description: {
      "@language": "en",
      "@value":
        "Swift specializes in digital marketing services, graphic design, content creation, and social media management in Egypt",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "القاهرة",
      addressRegion: "القاهرة",
      addressCountry: "مصر",
      streetAddress: "وسط البلد، القاهرة",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20-10-1234-5678",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://www.facebook.com/swiftegypt",
      "https://www.twitter.com/swiftegypt",
      "https://www.instagram.com/swiftegypt",
      "https://www.linkedin.com/company/swiftegypt",
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "سويفت للتسويق الرقمي",
    alternateName: "Swift Digital Marketing",
    image: "https://swift-eg.com/images/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "وسط البلد",
      addressLocality: "القاهرة",
      addressRegion: "القاهرة",
      postalCode: "11511",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    telephone: "+20-10-1234-5678",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing Services",
    name: {
      "@language": "ar",
      "@value": "خدمات التسويق الرقمي",
    },
    name: {
      "@language": "en",
      "@value": "Digital Marketing Services",
    },
    provider: {
      "@type": "Organization",
      name: "سويفت للتسويق الرقمي",
      alternateName: "Swift Digital Marketing",
    },
    areaServed: {
      "@type": "Country",
      name: "مصر",
      alternateName: "Egypt",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات سويفت",
      alternateName: "Swift Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "التصميم الجرافيكي",
            alternateName: "Graphic Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "صناعة المحتوى",
            alternateName: "Content Creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "تصوير الفيديوهات",
            alternateName: "Video Production",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "وضع الخطط الاستراتيجية",
            alternateName: "Strategic Planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "إدارة برامج التواصل الاجتماعي",
            alternateName: "Social Media Management",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  )
}
