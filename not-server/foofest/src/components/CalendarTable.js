import React from 'react'
import organize from "./CalendarTable.module.css"
import { useState, useEffect } from 'react'

function CalendarTable(props) {

    // store monday props as "monday"

    const monday = props.monday; 


  return (
    <>
     <table className={organize.table}>
            <thead className={organize.tableHead}>
              <tr className={organize.tableHeadRow}>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>


            <tbody className={organize.tableBody}>
                    
                    {/*------------- MONDAY COLUMN ---------------*/}
             
                <tc className={organize.tableColumn}>


                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[0].start}   </li>
                            <li>End: {monday[0].end} </li>
                            <li>Act: {monday[0].act} </li>    
                        </ul>
                    </td>

                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[1].start}   </li>
                            <li>End: {monday[1].end} </li>
                            <li>Act: {monday[1].act} </li>    
                        </ul>
                    </td>

                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[2].start}   </li>
                            <li>End: {monday[2].end} </li>
                            <li>Act: {monday[2].act} </li>    
                        </ul>
                    </td>

                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[3].start}   </li>
                            <li>End: {monday[3].end} </li>
                            <li>Act: {monday[3].act} </li>    
                        </ul>
                    </td>

                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[4].start}   </li>
                            <li>End: {monday[4].end} </li>
                            <li>Act: {monday[4].act} </li>    
                        </ul>
                    </td>

                    <td className={organize.tableRow}>
                        <ul className={organize.tableRowUl}>
                            <li>Start: {monday[5].start}   </li>
                            <li>End: {monday[5].end} </li>
                            <li>Act: {monday[5].act} </li>    
                        </ul>
                    </td>


                
                </tc>

            
               
            </tbody>

            
          </table>
    
    
    </>
  )
}

export default CalendarTable