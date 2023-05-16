import styles from "./Camp_card.module.css";
import Link from "next/link";

import React from 'react'

function Camp_card({title, bio, href}) {
  return (
    <article className={styles.card}>
        <span className={styles.swampfest}>SWAMPFEST 2023</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.bio}>{bio}</p>
        <span className={styles.info}>More info</span>
        <div className={styles.moneyAndFee}>
         <span className={styles.money}>799 <span className={styles.kr}>KR.</span></span>
         <span className={styles.fee}>+ fee</span>
        </div>
        <Link className={styles.button} href={`camping/${title.toLowerCase()}`}>BUY NOW</Link>
    </article>
  )
}

export default Camp_card