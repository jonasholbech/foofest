import TicketHolderCard from '@/components/TicketHolderCard/TicketHolderCard'
import React from 'react'
import TicketsContext from '@/context/ticketsContext';
import { useEffect, useState, useContext } from 'react';
import styles from "./ticketHolderInfo.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle';
import Link from 'next/link';
import Button from '@/components/button/Button';


function ticketHolderInfo() {

  // grab local info of ticket holders

  const [formName, setFormName] = useState([])
  const [formEmail, setFormEmail] = useState([])

    // grab global number of tickets

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


    // function to get the info of the holder from the form

    function retrieveHolderInfoName(num, name){

      setFormName([...formName, {"id": num, "name": name}])
      console.log(formName);
    }

    function retrieveHolderInfoEmail(num, email){

      setFormEmail([...formEmail, {"id": num, "email": email}])
      console.log(formEmail);

    }

    useEffect(() => {
      globalTicketInfo.setGlobalFormName(formName);
      globalTicketInfo.setGlobalFormEmail(formEmail);
    }, [formEmail, formName])

   
    

    // cry

  return (
        <>

<main className={styles.main}>

<section className={styles.details} >
  
  <article className={styles.orderSummary}>
    <span className={styles.orderTitle}>Order Summary:</span>

    <div className={styles.orderTotalDiv}>
      <span>Tickets:</span>
      <span className={styles.orderTicketCost}>{globalTicketInfo.howManyTickets}</span>
    </div>

    <div className={styles.orderTotalDiv}>
      <span>Tickets cost</span>
      <span className={styles.orderTicketCost}>{globalTicketInfo.costOfTickets}</span>
    </div>

    <div className={styles.orderTaxesDiv}>
      <span>Camping cost</span>
      <span className={styles.orderTaxesNum}>{globalTicketInfo.totalCampingCost} kr.</span>
    </div>

    <div className={styles.orderTotalDiv}>
      <span>Total</span>
      <span className={styles.orderTotalNum}>{globalTicketInfo.ticketsPlusTents} kr.</span>
    </div>
  </article>
  
  <div className={styles.allText}>
      <ThirdTitle
      
        thirdTitle="TICKET HOLDER INFO"
      />

      <p className={styles.description}>Fill in your information to receive your tickets.
         </p>

  </div>

  <div className={styles.selectTickets}>

        {cardStorage.map((el) => {
            return(
                <article key={cardStorage.indexOf(el) + 1}>
                    <TicketHolderCard 
                    num={cardStorage.indexOf(el) + 1}
                    getName={retrieveHolderInfoName}
                    getEmail={retrieveHolderInfoEmail}

                    />
        
                </article>
            )
        })}

  
  </div>

  <div className={styles.darkBtns}>
    <div className={styles.innerDivBtns}>

    <Link
    className={styles.backLink} 
    href="/buyingStage/campingAddOns">

    <Button title="BACK" 
    />
    
    </Link>

    <Button title="RESET STEP"
    />

    </div>
   

  </div>

  <div className={styles.nextStep}>

    <Link href="/buyingStage/checkout"
    >
    <button className={styles.nextStepBtn}
          disabled={formEmail.length === 0 || formName.length === 0 ? true : false}
          >
            GOT TO CHECKOUT
          </button>
    </Link>
  </div>

 
 

</section>
</main>

    </>
  )
}

export default ticketHolderInfo