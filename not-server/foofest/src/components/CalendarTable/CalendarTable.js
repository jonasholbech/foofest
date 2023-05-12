import React from 'react'
import organize from "./CalendarTable.module.css"
import { useState, useEffect, useRef } from 'react'
import ThirdTitle from '../ThirdTitle/ThirdTitle';

function CalendarTable() {


      // set index to alter the underlined day in the nav

      const [activeIndex, setActiveIndex] = useState(0)

      let isUnderlined = "underline 10px solid var(--shrek)";
      let isNotUnderlined = "none";

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
      setAllSchedule(newData)
     }
   });
   // keep an eye on the schedule stored as state, to see if it changes
}, [allSchedule]);


  // when the user clicks a day of the nav, the state should change
  // to "stage + day of week: midgard.fri"

  function changeDay(day, index){

    setActiveIndex(index);


    if (day === "mon"){
      setMidgard(allSchedule.Midgard.mon);
      setVanaheim(allSchedule.Vanaheim.mon);
      setJotunheim(allSchedule.Jotunheim.mon);

      

    
    } else if (day === "tue"){
      setMidgard(allSchedule.Midgard.tue);
      setVanaheim(allSchedule.Vanaheim.tue);
      setJotunheim(allSchedule.Jotunheim.tue);

      
    
    } else if(day === "wed"){
      setMidgard(allSchedule.Midgard.wed);
      setVanaheim(allSchedule.Vanaheim.wed);
      setJotunheim(allSchedule.Jotunheim.wed);

      

    
    } else if (day === "thu"){
      setMidgard(allSchedule.Midgard.thu);
      setVanaheim(allSchedule.Vanaheim.thu);
      setJotunheim(allSchedule.Jotunheim.thu);

      

    
    } else if (day === "fri"){
      setMidgard(allSchedule.Midgard.fri);
      setVanaheim(allSchedule.Vanaheim.fri);
      setJotunheim(allSchedule.Jotunheim.fri);

      

    
    } else if (day === "sat"){
      setMidgard(allSchedule.Midgard.sat);
      setVanaheim(allSchedule.Vanaheim.sat);
      setJotunheim(allSchedule.Jotunheim.sat);

     

    
    } else if (day === "sun"){
      setMidgard(allSchedule.Midgard.sun);
      setVanaheim(allSchedule.Vanaheim.sun);
      setJotunheim(allSchedule.Jotunheim.sun);

      

    }

  
  }



  return (
    <>  
    <section className={organize.sauronSection}>

  <nav className={organize.nav}>
        <ul className={organize.ul}>
            <li className={activeIndex === 0 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("mon", 0)}>MON</li>
            <li className={activeIndex === 1 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("tue", 1)}>TUE</li>
            <li className={activeIndex === 2 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("wed", 2)}>WED</li>
            <li className={activeIndex === 3 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("thu", 3)}>THU</li>
            <li className={activeIndex === 4 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("fri", 4)}>FRI</li>
            <li className={activeIndex === 5 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("sat", 5)}>SAT</li>
            <li className={activeIndex === 6 ? organize.underlinedBeauty : ''}   onClick={() =>changeDay("sun", 6)}>SUN</li>
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


    </section>
    
    
    </>
  )
}

export default CalendarTable