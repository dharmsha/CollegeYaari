import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// 1. ADVANCED SEO METADATA
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
    "University Reviews"
  ],
  authors: [{ name: "College-Yaari Team" }],
  creator: "College-Yaari",
  publisher: "College-Yaari",
  // Open Graph for Facebook/WhatsApp/LinkedIn
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://college-yaari.com',
    title: 'College-Yaari - Find Top Colleges in India',
    description: 'Verified reviews, cutoffs, and placements of all top Indian colleges.',
    siteName: 'College-Yaari',
    images: [
      {
        url: '/og-image.jpg', // Ye image public folder mein honi chahiye (1200x630)
        width: 1200,
        height: 630,
        alt: 'College-Yaari Portal',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'College-Yaari | India\'s Largest College Hub',
    description: 'Compare colleges, check cutoffs, and plan your career.',
    images: ['/og-image.jpg'],
  },
  // Mobile UI
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* JSON-LD Structured Data for Google (Bohot zaroori hai) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "College-Yaari",
              "url": "https://college-yaari.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://college-yaari.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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