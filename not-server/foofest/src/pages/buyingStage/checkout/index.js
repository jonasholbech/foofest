import React from 'react'
import { useContext, useState, useEffect } from 'react'
import TicketsContext from '@/context/ticketsContext'
import styles from "./checkout.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle'
import Link from 'next/link'
import Button from '@/components/button/Button'
import Checkout_collapse from '@/components/Checkout_collapse/Checkout_collapse'

function checkout() {

  const [isChecked, setIsChecked] = useState(0)


// bring context to this page

const globalMoneyContext = useContext(TicketsContext);

function checkMe(id){
setIsChecked(id);
}



return (
  <>
  <main className={styles.main}>

    <section className={styles.details} >

      
      <article className={styles.orderSummary}>
        <span className={styles.orderTitle}>Order Summary</span>

        <div className={styles.orderTicketsDiv}>
          <span>Tickets:</span>
          <span className={styles.orderNumOfTickets}>{globalMoneyContext.howManyTickets}</span>
        </div>

        <div className={styles.orderTotalDiv}>
          <span>Tickets cost</span>
          <span className={styles.orderTicketCost}>{globalMoneyContext.costOfTickets} kr.</span>
        </div>

        <div className={styles.orderCampingDiv}>
          <span>Camping cost</span>
          <span className={styles.orderCampingNum}>{globalMoneyContext.totalCampingCost} kr.</span>
        </div>

        <div className={styles.orderTotalDiv}>
          <span>Total</span>
          <span className={styles.orderTotalNum}>{globalMoneyContext.ticketsPlusTents} kr.</span>
        </div>
      </article>
      
      <div className={styles.allText}>
          <ThirdTitle
          
            thirdTitle="Checkout"
          />

          <p className={styles.description}>Esse minim dolor nostrud Lorem proident cupidatat aliqua proident sunt minim ut amet aliquip ex. 
             </p>

      </div>

      <div className={styles.deliveryDiv}>

        <span className={styles.deliveryTitle}><strong>Delivery</strong></span>

        <div className={styles.deliverySetType}>

          <Checkout_collapse name="Home">

            <form className={styles.sendTicketsToMyHome}>
              
                <div className={styles.sendTicketsToMyHomeFullName}>

                  <label>Full Name</label>
                  <input
                  placeholder='Fiona Charming'
                  />

                </div>

                <div className={styles.sendTicketsToMyHomeStreet}>

                  <label>Street & Number</label>
                  <input
                  placeholder='Ingerslevsgade 146'
                  />

                </div>

                <div className={styles.sendTicketsToMyHomeZipCode}>

                  <label>Zip code</label>
                  <input
                  placeholder='1705'
                  />

                </div>

                <div className={styles.sendTicketsToMyHomeCity}>

                  <label>Town/City</label>
                  <input
                  placeholder='Copenhagen'
                  />

                </div>

                <div className={styles.sendTicketsToMyHomeCountry}>

                  <label>Country/Region</label>
                  <input
                  placeholder='Denmark'
                  disabled
                  />

                </div>

                <div className={styles.sendTicketsToMyHomeEmailAndNumber}>

                    <div className={styles.sendTicketsToMyHomeEmail}>

                      <label>Email</label>
                      <input
                      placeholder='fiona@charming'
                      />

                    </div>

                    <div className={styles.sendTicketsToMyHomeNumber}>

                      <label>Phone Number</label>
                      <input
                      placeholder='52221989'
                      />

                    </div>

                </div>
             
            </form>

          </Checkout_collapse>

          <Checkout_collapse name="Online">

          <form className={styles.sendTicketsOnline}>
              
              <div className={styles.sendTicketsOnlineFullName}>

                <label>Full Name</label>
                <input
                placeholder='Fiona Charming'
                />

              </div>

              <div className={styles.sendTicketsOnlineEmail}>

                <label>Email</label>
                <input
                placeholder='fiona@charming'
                />

              </div>

          </form>



          </Checkout_collapse>

        </div>

        <div className={styles.paymentsDiv}>

          <span className={styles.paymentTitle}><strong>Payment</strong></span>


          <form>

              <span className={styles.selectPaymentMethodSpan}>Select payment method</span>

              <div className={styles.paymentMethodDiv}>
                
                <label className={isChecked == 1 ? styles.payWithThis : styles.notPayingWithThis} onClick={() => checkMe(1)}>Credit/Debit card</label>
              

              
               
                <label className={isChecked == 2 ? styles.payWithThis : styles.notPayingWithThis} onClick={() => checkMe(2)}>Paypal</label>
              

              
               
                <label className={isChecked == 3 ? styles.payWithThis : styles.notPayingWithThis} onClick={() => checkMe(3)}>Mobile Pay</label>
              

              
                <label className={isChecked == 4 ? styles.payWithThis : styles.notPayingWithThis} onClick={() => checkMe(4)}>Klarna</label>
              </div>

              



          </form>

          

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

        <Link href="/buyingStage/review"
        >
        <Button 
        title="GO TO REVIEW"
        />
        </Link>
      </div>
     
     

    </section>
  </main>
  </>
)
}

export default checkout