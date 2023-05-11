import React from 'react'
import organize from "./CalendarTable.module.css"
import { useState, useEffect } from 'react'
import ThirdTitle from '../ThirdTitle/ThirdTitle';
import LineupNav from '../LineupNav/LineupNav';

function CalendarTable(props) {




  return (
    <>
    
    <section className={organize.tableSection}>

        <section className={organize.stagesOutsideTable}>
            <ThirdTitle
            thirdTitle="MIDGARD" />
            <ThirdTitle
            thirdTitle="VANEHEIM" />
            <ThirdTitle
            thirdTitle="JOTUNHEIM" />
        </section>

    <table className={organize.table}>
            <thead className={organize.timeFrames}>
                
              <tr className={organize.sup}>
                <th>00:00</th>
              </tr>

              <tr>
              <th>02:00</th>
              </tr>

              <tr>
                <th>04:00</th>
              </tr>

              <tr>
                <th>06:00</th>
              </tr>

              <tr>
                <th>08:00</th>
              </tr>

              <tr>
                <th>10:00</th>
              </tr>

              <tr>
                <th>12:00</th>
              </tr>

              <tr>
                <th>14:00</th>
              </tr>

              <tr>
                <th>16:00</th>
              </tr>

              <tr>
                <th>18:00</th>
              </tr>

              <tr>
                <th>20:00</th>
              </tr>

              <tr>
                <th>22:00</th>
              </tr>
              
              <tr>
                <th>24:00</th>
              </tr>
            </thead>


            <tbody className={organize.tableBody}>

                <tr  className={organize.userRow}>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>
                  <td className={organize.tableRow}></td>

                </tr>
            
            </tbody>

            
          </table>


    </section>
    
    
    </>
  )
}

export default CalendarTable