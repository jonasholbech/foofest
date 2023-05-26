import React from 'react'
import { useEffect, useState, useContext } from 'react';
import styles from "./svartheim.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle';
import Button from '@/components/button/Button';
import Link from 'next/link';
import TicketsContext from '@/context/ticketsContext';


function svartheim() {

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
    setAvailableSpots(spots[0]);
    
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






 // multiply each num vs the cost of the ticket
 // pass that result to the order summary

 
 /*
 <div className={styles.overallSpots}>
 <span className={styles.spots}>Number of spots: {availableSpots.spots}</span>
 <span className={styles.availableSpots}>Available spots: {availableSpots.available}</span>
 </div>

 */



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
            
              thirdTitle="SVARTHEIM"
            />

            <p className={styles.description}>Esse minim dolor nostrud Lorem proident cupidatat aliqua proident sunt minim ut amet aliquip ex. 
              Minim deserunt nisi cillum fugiat sint non fugiat elit est velit id reprehenderit do id. 
              Laborum dolor irure labore Lorem do proident cillum sunt ut proident excepteur nisi. 
              Tempor deserunt anim quis amet. </p>

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
        //  onClick={() => alterTheCost(totalCost)}
          >
          <Button 
          title="NEXT STEP"
          />
          </Link>
        </div>
       
       

      </section>
    </main>
    </>
  )
}

export default svartheim