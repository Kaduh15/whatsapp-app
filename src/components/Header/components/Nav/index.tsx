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
        className="hover:text- data-[select=true]:border-b-4"
      >
        CHATS
      </Link>
      <Link
        href={'/status'}
        data-select={pathname === '/status'}
        className="hover:text- data-[select=true]:border-b-4"
      >
        STATUS
      </Link>
      <Link
        href={'/calls'}
        data-select={pathname === '/calls'}
        className="hover:text- data-[select=true]:border-b-4"
      >
        CALLS
      </Link>
    </nav>
  )
}
