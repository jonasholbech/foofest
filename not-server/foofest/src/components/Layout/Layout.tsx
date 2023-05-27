import React, { useContext } from "react";
import TicketsContext from "@/context/ticketsContext";
import Timer from "../Timer/Timer";

import law from "./Layout.module.css";
import Link from "next/link";

import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { DiMozilla } from "react-icons/di";

import styles from "./Layout.module.css";

import NavBurger from "../NavBurger/NavBurger";
const Layout = ({ children }) => {
  const globalValues = useContext(TicketsContext);
  // create a setTimeout that counts to 5 min

  return (
    <div>
      <header className={law.headerBox}>
        <NavBurger />
        <nav className={law.navBar}>
          <div className={law.festival_logo}>
            <Link className={styles.logoTxt} href="/">
              <h1>SwampFest</h1>
            </Link>
          </div>

          <ul className={law.nav_ul}>
            <li>
              <Link href="/line_up" className={law.navLi}>
                LINE UP
              </Link>
            </li>

            <li>
              <Link href="/volunteer" className={law.navLi}>
                VOLUNTEER
              </Link>
            </li>

            <li>
              <Link href="/tickets" className={law.navLi}>
                TICKETS
              </Link>
            </li>

            <li>
              <Link href="/about" className={law.navLi}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link href="/bands" className={law.navLi}>
                BANDS
              </Link>
            </li>
            {/* THE TIMER ONLY SHOWS UP AFTER YOU HAVE PICKED AT LEAST 1 TICKET */}

            {globalValues.howManyTickets === 0 ? "" : <Timer />}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footContainer}>
        <div className={styles.bottomNav}>
          <div className={styles.logoAndSoMe}>
            <h1 className={styles.logoTxt}>SwampFest</h1>
          </div>

          {/* bottom nav container */}
          <ul className={styles.bottomNavUl}>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Work with us</a>
            </li>
            <li>
              <a href="">Data policy</a>
            </li>
          </ul>

          <div className={styles.SoMeBottomNav}>
            {/* SoMe icon container */}
            <a href="#_">
              <FaFacebookF size={24} />
            </a>

            <a href="">
              <RiInstagramFill size={26} />
            </a>
            <a href="#_">
              <FaSpotify size={24} />
            </a>
            <a href="#_">
              <FaTiktok size={24} />
            </a>
          </div>
          <div className={styles.sponsorsContainer}>
            <p>SwampFest is sponsoret by</p>
            <DiMozilla size={60} />
            <DiMozilla size={60} />
            <DiMozilla size={60} />
          </div>
        </div>

        <p className={styles.examProject}>
          SwampFest is an exam project for 3rd semester on MMD KEA
        </p>
      </footer>
    </div>
  );
};

export default Layout;
