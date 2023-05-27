import MainTitle from "../../components/MainTitle/MainTitle";
import React from "react";
import styles from "./volunteer.module.css";
import Image from "next/image";

import volunteerImage from "../../public/imgs/volunteerShrek.png";

import profileImage1 from "../../public/imgs/volunteers/profile1.png";
import profileImage2 from "../../public/imgs/volunteers/profile2.png";
import profileImage3 from "../../public/imgs/volunteers/profile3.png";

function Volunteer() {
  return (
    <>
      <MainTitle mainTitle="VOLUNTEER" />
      <div className={styles.volunteerBox}>
        <section className={styles.sectionGrid}>
          <div className={styles.imgAndCredit}>
            <div className={styles.imageContainer}>
              <Image className={styles.imgStyle} src={volunteerImage} alt="/" />
            </div>
            <span className={styles.photoCredit}>
              Photo by{" "}
              <a href="https://unsplash.com/es/@a_kehmeier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Austin Kehmeier
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/lyiKExA4zQA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </div>
          <div className={styles.sectionTxt}>
            <h1>Volunteer at SwampFest</h1>
            <p>
              Become a part of the enchantment and make a difference at the
              Shrek-themed festival by volunteering your time and talents! Our
              festival thrives on the dedication and passion of volunteers who
              bring the magic of Shrek to life for all our visitors.
            </p>
            <p>
              As a volunteer at the Shrek-themed festival, you will have the
              opportunity to be an integral part of creating an unforgettable
              experience for attendees. Whether you're a fan of the films, enjoy
              working with people, or simply have a love for spreading joy,
              there's a role for everyone to contribute and be a part of the
              magic.
            </p>
            <p>
              Volunteering at our festival offers a chance to immerse yourself
              in the whimsical world of Shrek while gaining valuable experience,
              making new friends, and building lasting memories. From
              interacting with guests and assisting with activities to providing
              information and ensuring everyone's safety, your role as a
              volunteer will be vital in creating a welcoming and enjoyable
              atmosphere for all.
            </p>
            <p>
              No matter your age or background, we welcome volunteers with open
              arms and appreciate the unique skills and perspectives they bring
              to the festival. Whether you can commit to a few hours, a day, or
              the entire duration of the event, we value and appreciate every
              moment you contribute.
            </p>
            <p>
              By joining our team of dedicated volunteers, you'll have access to
              various benefits, including exclusive volunteer merchandise,
              behind-the-scenes glimpses, and the chance to form lifelong
              connections with fellow Shrek enthusiasts. Additionally, you'll
              receive training and support to ensure you feel confident and
              prepared in your assigned role.
            </p>
            <p>
              Volunteering is a rewarding experience that allows you to be a
              part of something truly magical. Your enthusiasm and dedication
              will help create memories for festival-goers that will last a
              lifetime. Together, we can make the Shrek-themed festival an
              unforgettable event filled with laughter, joy, and the spirit of
              camaraderie.
            </p>
            <p>
              Don't miss the chance to be a part of this extraordinary
              adventure! Join our team of volunteers and let your inner ogre
              shine as we bring the beloved world of Shrek to life. Apply today
              and let the magic begin!
            </p>
          </div>
        </section>
        <section className={styles.profileGrid}>
          <div className={styles.profileCard}>
            <div className={styles.imageContainer}>
              <Image className={styles.imgStyle} src={profileImage1} alt="/" />
            </div>
            <h4 className={styles.profileName}>Ogrebert Johnson</h4>
            <p className={styles.profileTitle}>Volunteer coordinator</p>
            <p className={styles.profileMail}>ogrebert@swampfest.org</p>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.imageContainer}>
              <Image className={styles.imgStyle} src={profileImage2} alt="/" />
            </div>
            <h4 className={styles.profileName}>Fiona Greenwood</h4>
            <p className={styles.profileTitle}>Volunteer coordinator</p>
            <p className={styles.profileMail}>fiona@swampfest.org</p>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.imageContainer}>
              <Image className={styles.imgStyle} src={profileImage3} alt="/" />
            </div>
            <h4 className={styles.profileName}>Donkey McGuire</h4>
            <p className={styles.profileTitle}>Volunteer coordinator</p>
            <p className={styles.profileMail}>donkey@swampfest.org</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Volunteer;
