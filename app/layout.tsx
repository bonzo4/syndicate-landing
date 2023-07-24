import { Header } from '@/components/layout/Header'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={`lg:min-h-screen bg-black flex flex-col items-center ${poppins.className}`}>
          <Header />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
