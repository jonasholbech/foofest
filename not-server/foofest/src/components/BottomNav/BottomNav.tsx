import React from "react";

import law from "./BottomNav.module.css";

import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { DiMozilla } from "react-icons/di";

const BottomNav = () => {
  return (
    <div className={law.footContainer}>
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
    </div>
  );
};

export default BottomNav;
