import React from 'react'
import law from "./Layout.module.css"
import Image from 'next/image'
import Link from 'next/link'
import messi from "../imgs/messi18.webp"

function Layout({children}) {
  return (
    <>
    <nav className={law.navigation}>
        <Link
        className={law.festival_logo}
        href="/"
        >
        <Image
        src={messi}
        width={100}
        height={100}
        alt='Insert img tak'
        />
        </Link>
        <ul className={law.nav_ul}>
           <Link href="/line_up">
            <li>LINE UP</li>
           </Link>

           <Link href="/volunteer">
            <li>VOLUNTEER</li>
           </Link>

           <Link href="/tickets">
            <li>TICKETS</li>
           </Link>

           <Link href="/about">
            <li>ABOUT</li>
           </Link>
        </ul>
    </nav>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout