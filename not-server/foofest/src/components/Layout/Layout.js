import React, { useContext } from 'react'
import law from "./Layout.module.css"
import Image from 'next/image'
import Link from 'next/link'
import messi from "../../imgs/messi18.webp"
import TicketsContext from '@/context/ticketsContext'
import Timer from '../Timer/Timer'

function Layout({children}) {

  const globalValues = useContext(TicketsContext)


  // create a setTimeout that counts to 5 min


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
           <Link href="/line_up" className={law.navLi}>
            <li>LINE UP</li>
           </Link>

           <Link href="/volunteer" className={law.navLi}>
            <li>VOLUNTEER</li>
           </Link>

           <Link href="/tickets" className={law.navLi}>
            <li>TICKETS</li>
           </Link>

           <Link href="/about" className={law.navLi}>
            <li>ABOUT</li>
           </Link>

           <Link href="/bands" className={law.navLi}>
            <li>BANDS</li>
           </Link>

          {
            globalValues.howManyTickets === 0 ? "" : <Timer />
          }


        </ul>
    </nav>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout