import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import styles from "./about.module.css";
import Image from "next/image";

import aboutImage from "../../public/imgs/aboutSwampImg.jpg";

function About() {
  return (
    <>
      <MainTitle mainTitle="ABOUT" />
      <div className={styles.aboutBox}>
        <section className={styles.sectionGrid}>
          <div className={styles.imgAndCredit}>
            <div className={styles.imageContainer}>
              <Image className={styles.imgStyle} src={aboutImage} alt="/" />
            </div>
            <span className={styles.photoCredit}>
              Photo by{" "}
              <a href="https://unsplash.com/@anthonydelanoix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Anthony DELANOIX
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/hzgs56Ze49s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </div>
          <div className={styles.sectionTxt}>
            <h1>About SwampFest</h1>
            <p>
              Welcome to the enchanting world of the Shrek-themed festival,
              where fairy tales come to life and laughter fills the air! Our
              festival is a whimsical celebration inspired by the beloved
              animated film franchise, Shrek. Immerse yourself in the magical
              universe of Shrek, Fiona, Donkey, and their merry band of misfits
              as we bring the spirit of the swamp to life.
            </p>
            <p>
              At our Shrek-themed festival, we invite you to embark on an
              extraordinary adventure that will transport you straight into the
              mythical land of Far Far Away. Whether you're a fan of the movies
              or simply love the charm and humor of Shrek's universe, this
              festival is a dream come true for Shrek enthusiasts of all ages.
            </p>
            <p>
              Discover a world brimming with fun and excitement as you explore
              our meticulously crafted Shrek-themed attractions, entertainment,
              and activities. Join Shrek and his companions on a quest through
              the enchanted forest, encountering captivating characters and
              unexpected surprises along the way. From Shrek's humble swamp to
              the towering walls of Lord Farquaad's castle, every iconic
              location from the movies is faithfully recreated for you to
              explore and enjoy.
            </p>
            <p>
              Indulge in a feast fit for an ogre at our food stalls, offering a
              variety of delectable treats inspired by the culinary delights of
              Far Far Away. From Shrek's favorite onion-flavored snacks to
              Fiona's ogre-sized desserts, your taste buds will be in for a
              gastronomic adventure.
            </p>
            <p>
              Immerse yourself in the world of Shrek through a variety of
              interactive experiences. Test your knowledge of the films in our
              trivia challenges, unleash your inner artist in our Shrek-themed
              arts and crafts workshops, or join in a lively game of "Pin the
              Tail on the Donkey." There's something for everyone at our
              festival, ensuring that the magic of Shrek lives on in your heart
              long after the event.
            </p>
            <p>
              Our Shrek-themed festival is a celebration of friendship,
              acceptance, and the power of true love's first kiss. It's a place
              where ogres and princesses, donkeys and dragons, can come together
              to revel in the joyous spirit of Shrek's world. So, gather your
              loved ones, put on your ogre ears, and get ready for an
              unforgettable experience that will leave you saying, "I'm a
              believer!"
            </p>
            <p>
              Join us at the Shrek-themed festival, where happily ever after
              begins with a roar of laughter and the warmth of a green, lovable
              ogre.
            </p>
          </div>
        </section>
        <section className={styles.sectionGrid}>
          <div className={styles.sectionTxt}>
            <h1>Contact Us</h1>
            <p>
              <strong>For general enquiries:</strong>
              <br />
              Telephone: (+02) 1234-5678
              <br />
              <a href="mailto:contact@swampfest.org">contact@swampfest.org</a>
            </p>
            <p>
              <strong>Adress:</strong>
              <br />
              SwampFest Inc.
              <br />
              Swampstreet 123
              <br />
              4321 Duloc
              <br />
              Fairyland
            </p>
          </div>
        </section>
        <section className={styles.sectionGrid}>
          <div className={styles.sectionTxt}>
            <h1>Want to work for us?</h1>
            <p>
              Send your application to us by carrier pidgeon <br />
              <span>(Disclaimer: bird might get eaten by Dragon)</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
