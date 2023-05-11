import React from 'react'
import navigation from "./LineupNav.module.css"

function LineupNav() {

  function letCalendarKnow(st){
    
  }


  return (
    <>
    <nav className={navigation.nav}>
        <ul className={navigation.ul}>
            <li onClick={() => letCalendarKnow("MON")} className={navigation.li}>MON</li>
            <li className={navigation.li}>TUE</li>
            <li className={navigation.li}>WED</li>
            <li className={navigation.li}>THU</li>
            <li className={navigation.li}>FRI</li>
            <li className={navigation.li}>SAT</li>
            <li className={navigation.li}>SUN</li>
        </ul>
    </nav>
    </>
  )
}

export default LineupNav