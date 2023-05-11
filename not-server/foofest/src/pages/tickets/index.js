import React from 'react'
import MainTitle from '@/components/MainTitle/MainTitle'
import tickets from "./tickets.module.css"
import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle'
import { useState, useEffect } from 'react'


function Tickets() {







  return (
    <>

    <main className={tickets.main}>
      

    <MainTitle
    mainTitle="TICKETS"
    />

    <form className={tickets.form}>
      <SecondaryTitle
      secondaryTitle="Start your journey"
      />
     

      <label className={tickets.label}>
            <span>Name</span>
            <input
           //   onChange={storeSize}
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </label>

          <label className={tickets.label}>
            <span>Email</span>
            <input
           //   onChange={storeSize}
              id="email"
              name="email"
              placeholder="john@doe"
              required
            />
          </label>

          <button className={tickets.btn}>NEXT</button>

    </form>




    </main>
    
    

    

    </>
  )
}

export default Tickets