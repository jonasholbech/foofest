import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import MainTitle from "../components/MainTitle/MainTitle";
import stayOut from "../public/imgs/stayout.jpg";
import SecondaryTitle from "../components/SecondaryTitle/SecondaryTitle";

import heroImage from "../public/imgs/nordicLights.jpg";
import galleryImage1 from "../public/imgs/gallery/gallery1sm.png";
import galleryImage2 from "../public/imgs/gallery/gallery2sm.png";
import galleryImage4 from "../public/imgs/gallery/gallery4sm.png";
import galleryImage3 from "../public/imgs/gallery/gallery3sm.png";

import Marquee from "react-fast-marquee";

import Link from "next/link";

import { RxDotFilled, RxDot } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className="heroSection">
          <div className="imageContainer">
            <Image className={styles.heroImg} src={heroImage} alt="/" />
          </div>
          <h1>
            All <br /> day - every <br /> day
          </h1>
        </div>

        <section className={styles.descriptionSection}>
          <div className={styles.descriptionContainer}>
            <p>
              At SwampFest, we invite you to embark on an extraordinary
              adventure that will transport you straight into the mythical land
              of Far Far Away. Whether you're a fan of the movies or simply love
              the charm and humor of Shrek's universe, this festival is a dream
              come true for Shrek enthusiasts of all ages.
            </p>
            <div className={styles.descriptionNumbers}>
              <span className={styles.descriptionNumber}>123 acts</span>
              <span className={styles.descriptionNumber}>5 stages</span>
              <span className={styles.descriptionNumber}>7 days</span>
            </div>
          </div>
        </section>

        <div className={styles.posterSection}>
          <h1>Poster section below this</h1>
        </div>

        <section className={styles.gallerySection}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.imgStyle}
              src={galleryImage4}
              sizes="(max-width: 750px) 100vw, 750px"
              alt="/"
            />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.imgStyle} src={galleryImage1} alt="/" />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.imgStyle} src={galleryImage3} alt="/" />
          </div>
        </section>

        <section className={styles.marqueeSection}>
          <Marquee autoFill={true} speed={60}>
            <span className={styles.topText}>
              24 hours a day <RxDot size={24} />
            </span>
          </Marquee>

          <Marquee direction="right" autoFill={true} speed={70}>
            <span className={styles.middleText}>
              7 days a week <RxDotFilled size={24} />
            </span>
          </Marquee>
          <div className={styles.bottomMarquee}>
            <Marquee autoFill={true} speed={50}>
              <span className={styles.bottomText}>
                52 weeks a year <RxDot size={24} />
              </span>
            </Marquee>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`${styles.ctaImage}`}>
            <Image
              className={styles.imgStyle}
              src={galleryImage2}
              sizes="(max-width: 750px) 100vw, 750px"
              alt="/"
            />
          </div>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2>Get Your Tickets Now!</h2>
              <p>
                Secure your spot today and embark on an extraordinary adventure
                that will transport you to the mythical land of Far Far Away.
                Hurry and grab your tickets before they're gone! Click here to
                purchase your tickets and be part of the unforgettable Shrek
                experience.
              </p>
            </div>
            <Link href="/Tickets">
              <p className={styles.ctaButton}>Start your adventure</p>
            </Link>
          </div>
        </section>

        {/* <div className={styles.partnersSection}>
          <h1>Partners section</h1>
        </div> */}
      </main>
    </div>
  );
}
