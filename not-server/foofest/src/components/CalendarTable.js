import React from 'react'
import organize from "./CalendarTable.module.css"
import { useState, useEffect } from 'react'
import ThirdTitle from './ThirdTitle';

function CalendarTable(props) {

    // store monday props as "monday"

    const monday = props.monday.map((el) => {
        return (
            <div className={organize.mondaySubordinates}>
                <h3 className={organize.mondaySubordinatesH3}>Act: {el.act}</h3>
                <p className={organize.mondaySubordinatesStart}>Start: {el.start}</p>
                <p className={organize.mondaySubordinatesEnd}>End: {el.end}</p>
                
            </div>
        )
    }); 


  return (
    <>
    <section className={organize.tableSection}>

        <ThirdTitle
        thirdTitle="Monday"
        />

        <section className={organize.monday}>

            {monday}


        </section>


    </section>
    
    
    </>
  )
}

export default CalendarTable