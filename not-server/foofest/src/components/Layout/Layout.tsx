import React from "react";
import law from "./Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";

import { DiMozilla } from "react-icons/di";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="">
        <nav className={law.navigation}>
          <Link className={law.festival_logo} href="/"></Link>
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
