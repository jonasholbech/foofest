import React from "react";
import law from "./NavBurger.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill, RiMenuFill } from "react-icons/ri";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import { GrClose, GrMenu } from "react-icons/gr";

const NavBurger = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={law.nav}>
      <div className={law.navContainer}>
        <div className={law.navbar}>
          <div className={law.logo}>
            <Link className={law.logoTxt} href="/">
              <h1>SwampFest</h1>
            </Link>
          </div>
          <div className={law.menuToggle} onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <AiOutlineClose size={40} />
            ) : (
              <AiOutlineMenu size={40} />
            )}
          </div>
        </div>
        <div
          className={law.navOverlay}
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className={law.navLinks}>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/line_up"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                LINE UP
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/volunteer"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                VOLUNTEER
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/tickets"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                TICKETS
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                ABOUT
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                className={law.menuItem}
                href="/bands"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                BANDS
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
          </ul>
          <div className={law.navBarFooter}>
            <div
              className={law.swampLocation}
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>The Forbidden Forrest, Duloc County</span>
            </div>
            <div className={law.navBarSoMe}>
              <ul>
                <li>
                  <Link
                    href="#_"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    <FaFacebookF size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    <RiInstagramFill size={26} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#_"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.5s" : "0s",
                    }}
                  >
                    <FaSpotify size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#_"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.6s" : "0s",
                    }}
                  >
                    <FaTiktok size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBurger;
