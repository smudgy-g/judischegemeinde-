import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Logo
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            className="text-white focus:outline-none focus:text-white"
          ></button>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-white">Contact</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
