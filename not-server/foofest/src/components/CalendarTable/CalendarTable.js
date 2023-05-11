import React from 'react'
import organize from "./CalendarTable.module.css"
import { useState, useEffect } from 'react'
import ThirdTitle from '../ThirdTitle/ThirdTitle';

function CalendarTable() {

      // we should fetch the whole schedule and divide it into 3 initial states, one per stage
      const [allSchedule, setAllSchedule] = useState([]);

      const [midgard, setMidgard] = useState([]);
      const [vanaheim, setVanaheim] = useState([]);
      const [jotunheim, setJotunheim] = useState([]);


 useEffect(() => {


   const festivalData = `http://localhost:8080/schedule`;

   fetch(festivalData)
   .then(response => response.json())
   .then(newData => {
     // Check if the data has changed (compare new data with current state of schedule)
     if (JSON.stringify(newData) !== JSON.stringify(allSchedule)) {
      setMidgard(newData.Midgard.mon);
      setVanaheim(newData.Vanaheim.mon);
      setJotunheim(newData.Jotunheim.mon);
     }
   });
   // keep an eye on the schedule stored as state, to see if it changes
}, [allSchedule]);

  // store each stage as state
  // and update it based on onClick functions


  // when the user clicks a day of the nav, the state should change
  // to "stage + day of week: midgard.fri"

  const [dayOfNav, setDayOfNav] = useState("monday")



  return (
    <>

  <nav className={organize.nav}>
        <ul className={organize.ul}>
            <li className={organize.li}>MON</li>
            <li className={organize.li}>TUE</li>
            <li className={organize.li}>WED</li>
            <li className={organize.li}>THU</li>
            <li className={organize.li}>FRI</li>
            <li className={organize.li}>SAT</li>
            <li className={organize.li}>SUN</li>
        </ul>
    </nav>
    
    <section className={organize.tableSection}>

        <section className={organize.stagesOutsideTable}>
            <ThirdTitle
            thirdTitle="MIDGARD" />
            <ThirdTitle
            thirdTitle="VANAHEIM" />
            <ThirdTitle
            thirdTitle="JOTUNHEIM" />
        </section>

    <table className={organize.table}>
            <thead className={organize.timeFrames}>
                
              <tr className={organize.specificTimeFrameZero}>
                <th>00:00</th>
                <th>02:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>04:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>06:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>08:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>10:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>12:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>14:00</th>
              </tr>  

              <tr  className={organize.specificTimeFrame}>
                <th>18:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>20:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>22:00</th>
              </tr>
              
              <tr className={organize.specificTimeFrameLast}>
                <th>00:00</th>
              </tr>
            </thead>


            <tbody className={organize.tableBody}>

              <tr className={organize.midgardActRow}>

              {midgard.map(el => {
                  return (
                    <div className={organize.midgardAct}>
                    <th key={el.id}>{el.act}</th>
                    <th>{el.start}</th>
                    <th>{el.end}</th>

                    </div>
                  )
                })}


              </tr>

              <tr className={organize.vanaheimActRow}>

              {vanaheim.map(el => {
                  return (
                    <div className={organize.vanaheimAct}>
                    <th key={el.id}>{el.act}</th>
                    <th>{el.start}</th>
                    <th>{el.end}</th>

                    </div>
                  )
                })}


              </tr>

              <tr className={organize.jotunheimActRow}>

              {jotunheim.map(el => {
                  return (
                    <div className={organize.jotunheimAct}>
                    <th key={el.id}>{el.act}</th>
                    <th>{el.start}</th>
                    <th>{el.end}</th>

                    </div>
                  )
                })}


              </tr>
          
            
           
            
            
            
               
            
            </tbody>

            
          </table>


    </section>
    
    
    </>
  )
}

export default CalendarTable