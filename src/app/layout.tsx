import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: 'Chats',
  description: 'Todas as conversas do WhatsApp',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} h-screen items-center justify-center bg-zinc-300 md:flex md:w-screen md:flex-col`}
      >
        <div className="flex h-full flex-col justify-between bg-white md:aspect-[6/12] md:w-[560px] md:rounded-3xl">
          <Header />
          {children}
          <Nav />
        </div>
      </body>
    </html>
  )
}
