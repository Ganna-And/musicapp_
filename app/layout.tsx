import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Finlandica } from 'next/font/google'

const font = Finlandica({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Ololo Music App',
  description: 'Listening music with Ololo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}
        </Sidebar></body>
    </html>
  )
}
