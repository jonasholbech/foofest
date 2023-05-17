import React from 'react'
import { useContext, useState, useEffect } from 'react'
import TicketsContext from '@/context/ticketsContext'
import styles from "./campingAddOns.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle'
import Link from 'next/link'
import Button from '@/components/button/Button'



function campingAddOns() {


// bring context to this page

const globalMoneyContext = useContext(TicketsContext);


// this is the cost of tickets from the previous page

const theTicketsCost = globalMoneyContext.costOfTickets;

// this is the cost of camping

const [camping, setCamping] = useState(0);

// this is the cost of tickets plus tents 

function addTentCostToTickets(){
  globalMoneyContext.setTicketsPlusTents(theTicketsCost => theTicketsCost + camping + vat );
}


// store num of personal tents as state 

const [personalTents, setPersonalTents] = useState(0);

// onClick functions for increasing and reducing the num of personal tents, max 4

function addPersonalTent(){
  if(personalTents < 4){
  setPersonalTents(old => old+1);
}
}

function subtractPersonalTent(){
  if(personalTents > 0){
  setPersonalTents(old => old-1);
}
}

  // store num of EcoSwamp tents as state 


const [ecoSwampTents, setEcoSwampTents] = useState(0);

// onClick functions for increasing and reducing the num of EcoSwamp tents, max 4

function addEcoSwamp(){
  if(ecoSwampTents < 4){
  setEcoSwampTents(old => old+1);
}
}

function subtractEcoSwamp(){
  if(ecoSwampTents > 0){
  setEcoSwampTents(old => old-1);
}
}

 // store num of SwampLux for 2 people as state 


 const [swampLuxForTwo, setSwampLuxForTwo] = useState(0);

 // onClick functions for increasing and reducing the num of EcoSwamp tents, max 4
 
 function addSwampLuxForTwo(){
   if(swampLuxForTwo < 4){
   setSwampLuxForTwo(old => old+1);
 }
 }
 
 function subtractSwampLuxForTwo(){
   if(swampLuxForTwo > 0){
   setSwampLuxForTwo(old => old-1);
 }
 }

 // store num of SwampLux for 3 people as state 


 const [swampLuxForThree, setSwampLuxForThree] = useState(0);

 // onClick functions for increasing and reducing the num of EcoSwamp tents, max 4
 
 function addSwampLuxForThree(){
   if(swampLuxForThree < 4){
   setSwampLuxForThree(old => old+1);
 }
 }
 
 function subtractSwampLuxForThree(){
   if(swampLuxForThree > 0){
   setSwampLuxForThree(old => old-1);
 }
 }




// store cost of tent vat

const [vat, setVat] = useState(0);

// store total in this page, to later add it as a global value

const [campingAllInclusive, setCampingAllInclusive] = useState(0)


useEffect(() => {

  setCampingAllInclusive(camping + vat + theTicketsCost)
  setCamping((swampLuxForThree * 399) + (swampLuxForTwo * 299) + (ecoSwampTents * 249))
  setVat(Math.floor(camping / 25));
  globalMoneyContext.setTicketsPlusTents(campingAllInclusive);

}, [vat, camping, swampLuxForThree, swampLuxForTwo, ecoSwampTents])



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
          <span className={styles.orderTicketCost}>{theTicketsCost} kr.</span>
        </div>

        <div className={styles.orderTaxesDiv}>
          <span>Camping cost</span>
          <span className={styles.orderTaxesNum}>{camping} kr.</span>
        </div>

        <div className={styles.orderTaxesDiv}>
          <span>VAT</span>
          <span className={styles.orderTaxesNum}>{vat} kr.</span>
        </div>

        <div className={styles.orderTotalDiv}>
          <span>Total</span>
          <span className={styles.orderTotalNum}>{globalMoneyContext.ticketsPlusTents} kr.</span>
        </div>
      </article>
      
      <div className={styles.allText}>
          <ThirdTitle
          
            thirdTitle="Camping"
          />

          <p className={styles.description}>Esse minim dolor nostrud Lorem proident cupidatat aliqua proident sunt minim ut amet aliquip ex. 
             </p>

      </div>

      <div className={styles.selectTickets}>

        <span className={styles.selectTitle}><strong>How would you like to camp?</strong></span>

        <div className={styles.selectRegular}>

              <div className={styles.selectRegularDiv}>
                <span><strong>Use your own tent</strong></span>
                <span className={styles.ticketSpecs}>Free</span>
              </div>

              <div className={styles.selectRegularAmount}>
                <span onClick={subtractPersonalTent}  className={styles.selectIcons}>-</span>
                <span className={styles.numOfTickets}>{personalTents}</span>
                <span onClick={addPersonalTent} className={styles.selectIcons}>+</span>
              </div>

        </div>
        {/*------------------*/}

        <div className={styles.selectVip}>
              
              <div className={styles.selectVipDiv}>
                <span><strong>EcoSwamp Camping</strong></span>
                <span className={styles.ticketSpecs}>+249.00 kr. pr tent</span>
              </div>

              <div className={styles.selectVipAmount}>
                <span onClick={subtractEcoSwamp}  className={styles.selectIcons}>-</span>
                <span className={styles.numOfTickets}>{ecoSwampTents}</span>
                <span onClick={addEcoSwamp} className={styles.selectIcons}>+</span>
              </div>

        </div>

          {/*------------------*/}

        <div className={styles.selectRegular}>

              <div className={styles.selectRegularDiv}>
                <span><strong>SwampLux for 2 people</strong></span>
                <span className={styles.ticketSpecs}>+299.00 kr. per tent</span>
              </div>

              <div className={styles.selectRegularAmount}>
                <span onClick={subtractSwampLuxForTwo}  className={styles.selectIcons}>-</span>
                <span className={styles.numOfTickets}>{swampLuxForTwo}</span>
                <span onClick={addSwampLuxForTwo}  className={styles.selectIcons}>+</span>
              </div>

        </div>
        {/*------------------*/}

        <div className={styles.selectRegular}>

              <div className={styles.selectRegularDiv}>
                <span><strong>SwampLux for 3 people</strong></span>
                <span className={styles.ticketSpecs}>+399.00 kr. per tent</span>
              </div>

              <div className={styles.selectRegularAmount}>
                <span onClick={subtractSwampLuxForThree}  className={styles.selectIcons}>-</span>
                <span className={styles.numOfTickets}>{swampLuxForThree}</span>
                <span onClick={addSwampLuxForThree}  className={styles.selectIcons}>+</span>
              </div>

        </div>
        {/*------------------*/}



      
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

export default campingAddOns