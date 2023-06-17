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
        className={`${inter.className} md:flex md:flex-col items-center justify-center md:w-screen h-screen bg-zinc-300`}
      >
        <div className="md:w-[560px] md:aspect-[6/12] md:rounded-3xl bg-white flex flex-col justify-between h-full">
          <Header />
          {children}
          <Nav />
        </div>
      </body>
    </html>
  )
}
