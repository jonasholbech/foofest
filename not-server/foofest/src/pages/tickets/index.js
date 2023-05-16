import React from 'react'
import MainTitle from '@/components/MainTitle/MainTitle'
import tickets from "./tickets.module.css"
import SecondaryTitle from '@/components/SecondaryTitle/SecondaryTitle'
import { useState, useEffect } from 'react'
import Camp_card from '@/components/Camp_card/Camp_card'


function Tickets() {







  return (
    <>

    <main className={tickets.main}>
      

    <MainTitle
    mainTitle="TICKETS"
    />

    <section className={tickets.campGrid}>

    <Camp_card
    title="SVARTHEIM"
    bio="Unveil the enchanting nights beneath a sky ablaze with stars."
    />

    <Camp_card
    title="NILFHEIM"
    bio="Enter Nilfheim, where serenity meets excitement."
    />

    <Camp_card
    title="HELHEIM"
    bio="Immerse yourself in the vibrant spirit of Helheim."
    />

    <Camp_card
    title="MUSPELHEIM"
    bio="Welcome to Muspelheim, where the fire of the festival burns brightest."
    />

    <Camp_card
    title="ALFHEIM"
    bio="Step into Alfheim, a magical enclave filled with whimsical charm."
    />


    

    </section>
    




    </main>
    
    

    

    </>
  )
}

export default Tickets