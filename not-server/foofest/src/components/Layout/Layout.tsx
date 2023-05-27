import React, { useContext } from "react";
import TicketsContext from "@/context/ticketsContext";
import Timer from "../Timer/Timer";

import law from "./Layout.module.css";
import Link from "next/link";

import { useState } from "react";

import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { DiMozilla } from "react-icons/di";

import NavBurger from "../NavBurger/NavBurger";
const Layout = ({ children }) => {
  // burger menu control
  const [navOpen, setNavOpen] = useState(false);

  const globalValues = useContext(TicketsContext);
  // create a setTimeout that counts to 5 min

  return (
    <div>
      <header className={law.headerBox}>
        <NavBurger />

        {/* THE TIMER ONLY SHOWS UP AFTER YOU HAVE PICKED AT LEAST 1 TICKET */}
        {globalValues.howManyTickets === 0 ? "" : <Timer />}
      </header>
      <main>{children}</main>
      <footer className={law.footContainer}>
        <div className={law.bottomNav}>
          <div className={law.logoAndSoMe}>
            <h1 className={law.logoTxt}>SwampFest</h1>
          </div>

          {/* bottom nav container */}
          <ul className={law.bottomNavUl}>
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

          <div className={law.SoMeBottomNav}>
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
          <div className={law.sponsorsContainer}>
            <p>SwampFest is sponsoret by</p>
            <DiMozilla size={60} />
            <DiMozilla size={60} />
            <DiMozilla size={60} />
          </div>
        </div>

        <p className={law.examProject}>
          SwampFest is an exam project for 3rd semester on MMD KEA
        </p>
      </footer>
    </div>
  );
};

export default Layout;
