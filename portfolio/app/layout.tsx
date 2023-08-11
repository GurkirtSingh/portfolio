import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Background from './background/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gurkirt Singh - Portfolio',
  description: 'A portfolio website for gurkirt singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body style={{margin:0, overflow: 'hidden'}} className={inter.className}>
      <Background>{children}</Background>
    </body>
  )
}
