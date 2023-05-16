import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle';
import React from 'react'
import { useEffect, useState } from 'react';
import styles from "./svartheim.module.css"

function svartheim() {

 // STORE AVAILABLE SPOTS

 const [availableSpots, setAvailableSpots] = useState([]);

 useEffect(() => {
   const api = `http://localhost:8080/available-spots`;


 let fetchRes = fetch(api);
 fetchRes
   .then((res) => res.json())
   .then((spots) => {
    setAvailableSpots(spots[0]);
    
   })
   .catch((err) => {
     console.error(err);
   });
 }, [])



  return (
    <>
    <main className={styles.main}>
      <SecondaryTitle
      secondaryTitle="SVARTHEIM"
      />

      <section className={styles.details} >
        <h3 className={styles.title}>Details</h3>
        <div className={styles.overallSpots}>
        <span className={styles.spots}>Number of spots: {availableSpots.spots}</span>
        <span className={styles.availableSpots}>Available spots: {availableSpots.available}</span>
        </div>

      </section>
    </main>
    </>
  )
}

export default svartheim