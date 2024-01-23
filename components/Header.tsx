import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import MobileNav from './MobileNav'
import NavItems from './NavItems'

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="p-5 md:px-10 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Judischegemeinde
        </Link>

        <nav className="flex justify-between">
          <div className="hidden md:flex max-w-xs">
            <NavItems />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  )
}
