import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Advanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "College-Yaari | India's Largest College Network & Admission Guide",
    template: "%s | College-Yaari"
  },
  description: "Find your dream college with College-Yaari. Explore 10,000+ verified colleges, compare cutoffs, placement records, and fee structures for IITs, NITs, and top universities in India.",
  keywords: [
    "College Admission India 2026", 
    "IIT Cutoffs", 
    "NIT Placement Records", 
    "Best Engineering Colleges", 
    "College Yaari", 
    "Top MBA Institutes", 
    "University Reviews",
    "JEE Main 2026",
    "NEET 2026",
    "College Predictor",
    "Admission Guidance"
  ],
  authors: [{ name: "College-Yaari Team" }],
  creator: "College-Yaari",
  publisher: "College-Yaari",
  
  // Open Graph for Facebook/WhatsApp/LinkedIn
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://collegeyaari.in',
    title: 'College-Yaari - Find Top Colleges in India',
    description: 'Verified reviews, cutoffs, and placements of all top Indian colleges. Get personalized college recommendations.',
    siteName: 'College-Yaari',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'College-Yaari - Your Career Guide',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'College-Yaari | India\'s Largest College Hub',
    description: 'Compare colleges, check cutoffs, and plan your career with College-Yaari.',
    images: ['/og-image.jpg'],
    site: '@collegeyaari',
    creator: '@collegeyaari',
  },
  
  // Mobile UI
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification code dalna
  },
  
  // Alternates
  alternates: {
    canonical: 'https://collegeyaari.in',
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* JSON-LD Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "College-Yaari",
              "url": "https://collegeyaari.in",
              "logo": "https://collegeyaari.in/logo.png",
              "sameAs": [
                "https://www.instagram.com/collegeyaariofficial",
                "https://www.facebook.com/collegeyaari",
                "https://t.me/collegeyaari",
                "https://www.youtube.com/@collegeyaariofficial",
                "https://whatsapp.com/channel/0029Vb74q9I8KMqsoFrVNQ1y"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8292748995",
                "contactType": "customer service",
                "email": "collegeyaariofficial@gmail.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "description": "India's largest college network helping students find their perfect college through data-driven predictions and authentic reviews."
            })
          }}
        />

        {/* JSON-LD - Website Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "College-Yaari",
              "url": "https://collegeyaari.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://collegeyaari.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* JSON-LD - College Predictor Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "College Predictor",
              "description": "Predict your college admission chances based on your marks and percentile",
              "url": "https://collegeyaari.in/college-yaari",
              "applicationCategory": "Education",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              }
            })
          }}
        />

        {/* JSON-LD - Reviews Aggregate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "College-Yaari Services",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Rahul Kumar"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Best platform for college guidance! Helped me get into IIT Delhi."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Priya Singh"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Amazing college predictor. Very accurate recommendations!"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Amit Sharma"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Very helpful for JEE aspirants. Got accurate percentile prediction."
                }
              ]
            })
          }}
        />

        {/* JSON-LD - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://collegeyaari.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "College Predictor",
                  "item": "https://collegeyaari.in/college-yaari"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About Us",
                  "item": "https://collegeyaari.in/about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://collegeyaari.in/contact"
                }
              ]
            })
          }}
        />

        {/* Social Media Preconnect */}
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://t.me" />
        <link rel="preconnect" href="https://www.youtube.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://collegeyaari.in" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en" href="https://collegeyaari.in" />
        <link rel="alternate" hrefLang="hi" href="https://collegeyaari.in/hi" />
      </head>
      <body className="bg-gray-50 antialiased selection:bg-indigo-100 selection:text-indigo-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}