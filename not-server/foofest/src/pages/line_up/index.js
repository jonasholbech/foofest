import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Artist from '@/components/Artist'
import styles from "./Line_up.module.css"
import MainTitle from '@/components/MainTitle'
import Stage from '@/components/Stage'



function Line_up() {

  

      // DISPLAYING SCHEDULE


    const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const apiStages = `http://localhost:8080/schedule`;


  let fetchRes2 = fetch(apiStages);
  fetchRes2
    .then((res) => res.json())
    .then((locations) => {

    setSchedule(locations);

    })
    .catch((err) => {
      console.error(err);
    });
  }, [])

  const bigThreeStages = Object.keys(schedule);
  
  const stagesAppearing = bigThreeStages.map((stage) => {
    return (
      <Stage 
      key={bigThreeStages.indexOf(stage)}
      stageTitle={stage}
      />
    )
  })



  return (
    <>
    <MainTitle
    mainTitle="LINE UP"
    />

    <section className={styles.stages}>
      
      {stagesAppearing}

    </section>


    </>
  )
}

export default Line_up