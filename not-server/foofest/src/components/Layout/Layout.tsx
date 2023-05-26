import React from "react";
import law from "./Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";

import { DiMozilla } from "react-icons/di";

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
      <footer className="">
        <h1 className="">SwampFest</h1>
        <div className="">
          {/* bottom nav container */}
          <ul>
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
        </div>
        <div className="">
          {/* SoMe icon container */}
          <a href="#_">
            <FaFacebookF />
          </a>

          <a href="">
            <RiInstagramFill />
          </a>
          <a href="#_">
            <FaSpotify />
          </a>
          <a href="#_">
            <FaTiktok />
          </a>
        </div>
        <div className="">
          <p>SwampFest is sponsoret by</p>
          <DiMozilla />
        </div>
        <p className="exam-project">
          SwampFest is a 3rd semester exam project on MMD KEA
        </p>
      </footer>
    </div>
  );
};

export default Layout;
