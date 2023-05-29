import React from 'react'
import { useEffect, useState, useContext } from 'react';
import styles from "./helheim.module.css"
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle"
import Button from "../../../components/button/Button"
import Link from 'next/link';
import TicketsContext from "../../../context/ticketsContext"


function helheim() {

  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  function modifyGlobalMoneyContext(){
    globalMoneyContext.setCostOfTickets(totalCost);
  }



 // STORE AVAILABLE SPOTS

 const [availableSpots, setAvailableSpots] = useState([]);

 useEffect(() => {
   const api = `http://localhost:8080/available-spots`;


 let fetchRes = fetch(api);
 fetchRes
   .then((res) => res.json())
   .then((spots) => {


    setAvailableSpots(spots[2]);
    
   })
   .catch((err) => {
     console.error(err);
   });
 }, [])


 //

  // store num of tickets as state 

 const [regularTickets, setRegularTickets] = useState(0);

  // onClick functions for increasing and reducing the num of tickets, max 4

  function addRegTicket(){
    if(regularTickets < 4){
    setRegularTickets(old => old+1);
  }
  }

  function subtractRegTicket(){
    if(regularTickets > 0){
    setRegularTickets(old => old-1);
  }
  }

    // store num of VIP tickets as state 


 const [vipTickets, setVipTickets] = useState(0);

  // onClick functions for increasing and reducing the num of VIP tickets, max 4

  function addVipTicket(){
    if(vipTickets < 4){
    setVipTickets(old => old+1);
  }
  }

  function subtractVipTicket(){
    if(vipTickets > 0){
    setVipTickets(old => old-1);
  }
  }

  // store cost of ticket total

  const [ticketCost, setTicketCost] = useState(0);

  const [vat, setVat] = useState(0);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {

    setTicketCost((799 * regularTickets) + (1299 * vipTickets));
    setVat(Math.floor(totalCost / 25));
    setTotalCost(ticketCost + vat);

    modifyGlobalMoneyContext();

    globalMoneyContext.setHowManyTickets(regularTickets + vipTickets);

    globalMoneyContext.setGlobalVat(oldVat => oldVat + vat);

  }, [regularTickets, vipTickets, totalCost, ticketCost, vat])



// CHECK IF AMOUNT OF TICKETS IS BIGGER THAN TICKETS AVAILABLE

  function checkAvailability(event){
    globalMoneyContext.setSelectedCamp("helheim")

    if (regularTickets + vipTickets > availableSpots.available){
      alert(`There are not enough tickets available. Available tickets: ${availableSpots.available} `)
      event.preventDefault();
    }
  }



  return (
    <>
    <main className={styles.main}>

      <section className={styles.details} >

        <div className={styles.nordicLights}>

        </div>
        
        
        <article className={styles.orderSummary}>
          <span className={styles.orderTitle}>Order Summary</span>
          <div className={styles.orderTotalDiv}>
            <span>Ticket cost</span>
            <span className={styles.orderTicketCost}>{ticketCost} kr.</span>
          </div>

          <div className={styles.orderTaxesDiv}>
            <span>VAT</span>
            <span className={styles.orderTaxesNum}>{vat} kr.</span>
          </div>

          <div className={styles.orderTotalDiv}>
            <span>Total</span>
            <span className={styles.orderTotalNum}>{totalCost} kr.</span>
          </div>
        </article>
        
        <div className={styles.allText}>
            <ThirdTitle
            
              thirdTitle="HELHEIM"
            />

            <p className={styles.description}>Immerse yourself in the vibrant spirit of Helheim. 
            Our most dynamic campsite, it's located right in the heart of the festival. 
            Here, you'll be at the epicenter of the energy and excitement, with non-stop music, thrilling performances, 
            and the lively bustle of festival life.</p>

        </div>

        <div className={styles.selectTickets}>

          <span className={styles.selectTitle}><strong>Select your tickets</strong></span>

          <div className={styles.selectRegular}>
                
                <div className={styles.selectRegularDiv}>
                  <span><strong>Regular</strong></span>
                  <span className={styles.ticketSpecs}>799 kr. pr ticket</span>
                </div>

                <div className={styles.selectRegularAmount}>
                  <span onClick={subtractRegTicket} className={styles.selectIcons}>-</span>
                  <span className={styles.numOfTickets}>{regularTickets}</span>
                  <span onClick={addRegTicket} className={styles.selectIcons}>+</span>
                </div>

          </div>

          <div className={styles.selectVip}>
                
                <div className={styles.selectVipDiv}>
                  <span><strong>VIP</strong></span>
                  <span className={styles.ticketSpecs}>1299.00 kr. pr ticket</span>
                </div>

                <div className={styles.selectVipAmount}>
                  <span onClick={subtractVipTicket} className={styles.selectIcons}>-</span>
                  <span className={styles.numOfTickets}>{vipTickets}</span>
                  <span onClick={addVipTicket} className={styles.selectIcons}>+</span>
                </div>

          </div>

        
        </div>

        <div className={styles.darkBtns}>
          <div className={styles.innerDivBtns}>

          <Link
          className={styles.backLink} 
          href="/tickets">

          <Button title="BACK" 
          />
          
          </Link>

          <Button title="RESET STEP"
          />

          </div>
         

        </div>

        <div className={styles.nextStep}>

          <Link href="/buyingStage/campingAddOns"
          onClick={checkAvailability}
          >
           <button className={styles.nextStepBtn}
          disabled={globalMoneyContext.howManyTickets == 0 ? true : false}
          >
            NEXT STEP
          </button>
          </Link>

          <div className={styles.overallSpots}>
              <span className={styles.spots}>Number of spots: {availableSpots.spots}</span>
              <span className={styles.availableSpots}>Available spots: {availableSpots.available}</span>
          </div>
          
        </div>
       
       

      </section>
    </main>
    </>
  )
}

export default helheim