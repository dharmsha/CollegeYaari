// app/layout.jsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Single font - minimal
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Basic metadata
export const metadata: Metadata = {
  title: 'College-Yaari - India\'s Largest College Network',
  description: 'Connect with verified college',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}