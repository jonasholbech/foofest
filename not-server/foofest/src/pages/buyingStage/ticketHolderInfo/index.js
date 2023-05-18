import TicketHolderCard from '@/components/TicketHolderCard/TicketHolderCard'
import React from 'react'
import TicketsContext from '@/context/ticketsContext';
import { useEffect, useState, useContext } from 'react';
import styles from "./ticketHolderInfo.module.css"


function ticketHolderInfo() {


    // grab global number of tickets, check it works

    const globalTicketInfo = useContext(TicketsContext);

    const myArrayWithSlots = new Array()

    for(let i=0; i < globalTicketInfo.howManyTickets; i++){
        myArrayWithSlots.push(Math.random() * 10);
    }



    // store the cards as state

    const [cardStorage, setCardStorage] = useState([])

    useEffect(() => {
        
        
        setCardStorage(myArrayWithSlots);

    }, [])


    

    // use it to create the exact num of cards


    

    

    // cry

  return (
    <>
    <div className={styles.cardsGrid}>

{cardStorage.map((el) => {
    return(
    <article key={cardStorage.indexOf(el) + 1}>
            <TicketHolderCard 
            num={cardStorage.indexOf(el) + 1}
            />
        
    </article>
    )
})}
        
        

    </div>

    </>
  )
}

export default ticketHolderInfo