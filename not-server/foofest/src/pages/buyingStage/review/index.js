import React from 'react'
import { useContext, useState, useEffect, useRef } from 'react'
import TicketsContext from '@/context/ticketsContext'
import styles from "./review.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle'
import Link from 'next/link'
import Button from '@/components/button/Button'
import Checkout_collapse from '@/components/Checkout_collapse/Checkout_collapse'

function index() {

 // use a ref for the checkbox
 
 const agreeCheckbox = useRef()

 const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


 function toggleCheckbox(){
  setIsCheckboxChecked(!isCheckboxChecked)
 }

// bring context to this page

const globalMoneyContext = useContext(TicketsContext);


  return (
    <>
    <main className={styles.main}>
  
      <section className={styles.details} >
  
        
        
        <div className={styles.allText}>
            <ThirdTitle
            
              thirdTitle="ORDER REVIEW"
            />
  
            <p className={styles.description}>
              Review your purchase before approving it.

               </p>
  
        </div>
  
        <div className={styles.deliveryDiv}>
  
          <span className={styles.deliveryTitle}><strong>Order Summary</strong></span>

          <div className={styles.individualCostsDiv}>

            <span>Tickets</span>
            <span>{globalMoneyContext.costOfTickets}</span>

          </div>

          <div className={styles.individualCostsDiv}>

            <span>Camping</span>
            <span>{globalMoneyContext.totalCampingCost}</span>

          </div>

           <div className={styles.individualCostsDiv}>

            <span>Item(s) total</span>
            <span>{globalMoneyContext.ticketsPlusTents}</span>

          </div>

          <div className={styles.individualCostsDiv}>

            <span>Booking fee</span>
            <span>99.00 kr</span>

          </div>

          <div className={styles.individualCostsDiv}>

            <span>Delivery fee</span>
            <span>24.00 kr</span>

          </div>

          <div className={styles.individualCostsDiv}>

            <span>VAT</span>
            <span>{globalMoneyContext.globalVat} kr</span>

          </div>

          <div className={styles.individualCostsDiv}>

            <span>Order Total</span>
            <span>{globalMoneyContext.ticketsPlusTents + 99 + 24} kr</span>

          </div>
  

        </div>  

        <div className={styles.checkboxDiv}>

        <input ref={agreeCheckbox} checked={isCheckboxChecked} type='checkbox' onClick={toggleCheckbox} />

        <label>
          I've read and accepted the terms of sales and delivery.
        </label>

        </div>
  
        <div className={styles.darkBtns}>
          <div className={styles.innerDivBtns}>
  
          <Link
          className={styles.backLink} 
          href="/buyingStage/checkout">
  
          <Button title="BACK" 
          />
          
          </Link>
  
          <Button title="RESET STEP"
          />
  
          </div>
         
  
        </div>
  
        <div className={styles.nextStep}>
  
          <Link href="/buyingStage/success"
          >
           <button className={styles.nextStepBtn}
          disabled={isCheckboxChecked ? false : true}
          >
            APPROVE PURCHASE
          </button>
          </Link>
        </div>
       
       
  
      </section>
    </main>
    </>
  )
}

export default index