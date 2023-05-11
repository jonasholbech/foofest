import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./Line_up.module.css"
import MainTitle from '@/components/MainTitle/MainTitle'
import Stage from '@/components/Stage/Stage'
import Link from 'next/link'
import CalendarTable from '@/components/CalendarTable/CalendarTable'
import LineupNav from '@/components/LineupNav/LineupNav'



function Line_up() {

  // we should fetch the whole schedule and divide it into 3 initial states, one per stage

  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);


 useEffect(() => {
   const festivalData = `http://localhost:8080/schedule`;


 let fetchRes = fetch(festivalData);
 fetchRes
   .then((res) => res.json())
   .then((info) => {
    
   setMidgard(info.Midgard);
   setVanaheim(info.Vaneheim);
   setJotunheim(info.Jotunheim);

   })
   .catch((err) => {
     console.error(err);
   });
 }, [])

  

      // DISPLAYING SCHEDULE


    const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const apiStages = `http://localhost:8080/schedule`;


  let fetchRes2 = fetch(apiStages);
  fetchRes2
    .then((res) => res.json())
    .then((locations) => {
    console.log(locations.Midgard)
    setSchedule(locations);

    })
    .catch((err) => {
      console.error(err);
    });
  }, [])



  return (
    <>
    <MainTitle
    mainTitle="LINE UP"
    />

    <section className={styles.stages}>

      <LineupNav />

      <CalendarTable />
      

    </section>


    </>
  )
}

export default Line_up