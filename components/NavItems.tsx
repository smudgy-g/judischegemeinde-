'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from '../constants'

const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className="md:flex-between flex flex-col items-start gap-8 md:flex-row">
      {navLinks.map((link) => {
        const isActive = pathname === link.route
        return (
          <li key={link.route} className={`${isActive && 'text-blue-800'} font-medium text-lg`}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
