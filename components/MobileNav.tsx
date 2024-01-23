import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import NavItems from './NavItems'

const MobileNav = () => {
  const pathname = usePathname()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }
  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMobileNav} className="z-[100] relative">
          {isMobileNavOpen ? (
            <Image
              src="./assets/icons/close.svg"
              alt="close"
              height={24}
              width={24}
            />
          ) : (
            <Image
              src="./assets/icons/menu.svg"
              alt="menu"
              height={24}
              width={24}
            />
          )}
        </button>
      </div>

      <nav
        className={`${
          isMobileNavOpen ? 'left-0' : 'left-[100%]'
        } md:hidden fixed top-0 bottom-0 w-full bg-blue-700/80 text-4xl flex flex-col justify-around items-end z-50 p-14 duration-500 ease-in-out transition-all`}
      >
        <NavItems />
      </nav>
    </>
  )
}

export default MobileNav
