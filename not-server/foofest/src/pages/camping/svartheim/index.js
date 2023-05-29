import React from 'react'
import { useEffect, useState, useContext } from 'react';
import styles from "./svartheim.module.css"
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle"
import Button from "../../../components/button/Button"
import Link from 'next/link';
import TicketsContext from "../../../context/ticketsContext"


function svartheim() {

    // bring context to this page

    const globalMoneyContext = useContext(TicketsContext);


// THIS IS TO GET THE ID FROM THE ENDPOINT, BRING LOWER LATER

  // when the user clicks on one of the cards, we have to send a get request
  // and fetch an ID that we'll store in our database at the end of the 
  // buying process

  // onClick event triggers a get request to "/reserve-spot" (this is inside of the checkavailability function)

  // we store the id as global context

  const [storeReservationId, setStoreReservationId] = useState(null);

  // in the last approval of the purchase we send a POST request to the endpoint "/fullfill-reservation"








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



// CHECK IF AMOUNT OF TICKETS IS BIGGER THAN TICKETS AVAILABLE

function checkAvailability(){
  globalMoneyContext.setSelectedCamp("svartheim")
  if (regularTickets + vipTickets > availableSpots.available){
    console.log(`There are not enough tickets available. Available tickets: ${availableSpots.available} `)
  } else {


    // GET RESERVATION ID FROM ENDPOINT "/reserve-spot" WITH A PUT REQUEST

    const payload = {
      "area": "Svartheim",
      "amount": globalMoneyContext.howManyTickets
    };
  
    const url = "http://localhost:8080/reserve-spot"


    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "text/plain"
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(response => {
        console.log(response, globalMoneyContext.howManyTickets, storeReservationId, response.id);
        globalMoneyContext.setGlobalReservationId(response.id);
      })
      .catch(error => {
        console.error("Error:", error);
      });

      
  
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
            
              thirdTitle="SVARTHEIM"
            />

            <p className={styles.description}>Unveil the enchanting nights beneath a sky ablaze with stars. 
            Svartheim offers a secluded sanctuary in the heart of the festival, inviting you to unwind and connect 
            with your fellow festival-goers amidst a tranquil woodland backdrop. </p>

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

export default svartheim