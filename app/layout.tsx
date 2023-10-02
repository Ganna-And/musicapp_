import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Finlandica } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToaserProvider'

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
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
        <Sidebar>
          {children}
        </Sidebar>
        </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
