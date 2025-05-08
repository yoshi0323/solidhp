import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SOLID - Strong and Professional',
  description: 'SOLID - 強さと専門性を追求する企業',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} bg-solid-gray-900 text-solid-gray-100`}>
        {children}
      </body>
    </html>
  )
} 