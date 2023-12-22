import type { Metadata } from 'next'
import { Quattrocento_Sans } from 'next/font/google'
import './globals.css'

const font = Quattrocento_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })

export const metadata: Metadata = {
  title: 'Photos by Timo Taglieber',
  description: 'A photo gallery app built with Next.js, React, and Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
