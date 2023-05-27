import React from "react";
import law from "./NavBurger.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const NavBurger = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={law.nav}>
      <div className={law.navContainer}>
        <div className={law.navbar}>
          <div className={law.logo}>SwampFest 2.0</div>
          <div className={law.menuToggle} onClick={() => setNavOpen(!navOpen)}>
            <div
              className={
                navOpen ? `${law.hamBox} ${law.hamBoxOpen}` : law.hamBox
              }
            >
              <span
                className={navOpen ? `${law.lineTop} ${law.spin}` : law.lineTop}
              ></span>
              <span
                className={
                  navOpen ? `${law.lineBottom} ${law.spin}` : law.lineBottom
                }
              ></span>
            </div>
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
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Home
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Projects
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                About
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Contact
              </Link>
              <div className={law.navItemWrapper}></div>
            </li>
            <li className={law.navItem}>
              <Link
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                link
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
