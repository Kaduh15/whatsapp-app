'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      <Link
        href={'/'}
        data-select={pathname === '/'}
        className="border-white  px-3 hover:text-zinc-300 data-[select=true]:border-b-2"
      >
        CHATS
      </Link>
      <Link
        href={'/status'}
        data-select={pathname === '/status'}
        className="border-white  px-3 hover:text-zinc-300 data-[select=true]:border-b-2"
      >
        STATUS
      </Link>
      <Link
        href={'/calls'}
        data-select={pathname === '/calls'}
        className="border-white px-3 hover:text-zinc-300 data-[select=true]:border-b-2"
      >
        CALLS
      </Link>
    </nav>
  )
}
