import React from 'react'
import { useContext, useState, useEffect } from 'react'
import TicketsContext from '@/context/ticketsContext'
import styles from "./checkout.module.css"
import ThirdTitle from '@/components/ThirdTitle/ThirdTitle'
import Link from 'next/link'
import Button from '@/components/button/Button'

function checkout() {

  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  // build an object that will store the delivery details

  const [user, setUser] = useState({
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: ""

  })

  function handleInputs(event){
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

    console.log(user)

  }

  useEffect(() => {

    globalMoneyContext.setDeliveryObject(user);

  })


  

  // CREATE COLLAPSIBLE

//  const Collapsible = ({ title, children }) => {
//    const [isCollapsed, setIsCollapsed] = useState(true);
  
//    const toggleCollapse = () => {
//      // toggle collapse
 //     setIsCollapsed(!isCollapsed);

//    };
  
//    return (
//      <div className={styles.collapseDiv}>
//        <button className={styles.collapseDivBtn} onClick={toggleCollapse}>
//          {isCollapsed ? title + " +" : title + " -"}
//        </button>
//        {!isCollapsed && !fillingForm && <div>{children}</div>}
//      </div>
//    );
//  };


  // check which payment method has been chosen

  const [isChecked, setIsChecked] = useState(0)

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

          <p className={styles.description}>Choose delivery and payment options.
             </p>

      </div>

      <div className={styles.deliveryDiv}>

        <span className={styles.deliveryTitle}><strong>Delivery</strong></span>

        <div className={styles.deliverySetType}>


        <div className={styles.collapseDiv}>

        {/*   
       
        <Collapsible title="HOME" typeOfDelivery="home"> */}

        <form className={styles.sendTicketsToMyHome}>
              
              <div className={styles.sendTicketsToMyHomeFullName}>

                <label>Full Name</label>
                <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder='Fiona Charming'
                required
                />

              </div>

              <div className={styles.sendTicketsToMyHomeStreet}>

                <label>Street & Number</label>
                <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputs}
                placeholder='Ingerslevsgade 146'
                required
                />

              </div>

              <div className={styles.sendTicketsToMyHomeZipCode}>

                <label>Zip code</label>
                <input
                type="number"
                name="zipCode"
                value={user.zipCode}
                onChange={handleInputs}
                placeholder='1705'
                required
                />

              </div>

              <div className={styles.sendTicketsToMyHomeCity}>

                <label>Town/City</label>
                <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleInputs}
                placeholder='Copenhagen'
                required
                />

              </div>

              <div className={styles.sendTicketsToMyHomeCountry}>

                <label>Country/Region</label>
                <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleInputs}
                placeholder='Denmark'
                required
                
                />

              </div>

              <div className={styles.sendTicketsToMyHomeEmailAndNumber}>

                  <div className={styles.sendTicketsToMyHomeEmail}>

                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='fiona@charming'
                    required
                    />

                  </div>

                  <div className={styles.sendTicketsToMyHomeNumber}>

                    <label>Phone Number</label>
                    <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder='52221989'
                    required
                    />

                  </div>

              </div>
           
          </form>

          
      {/*   </Collapsible> 

        <Collapsible title="ONLINE" typeOfDelivery="online"> 

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


      </Collapsible> */}


      </div>

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
        href="/buyingStage/ticketHolderInfo">

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
        <button className={styles.nextStepBtn}
          disabled={user.name == "" || user.address == "" || user.zipCode == "" || user.city == "" || user.country == "" 
          || user.email == "" || user.phone == "" ? true : false}
          >
            REVIEW ORDER
          </button>
        </Link>
      </div>

     
     

    </section>
  </main>
  </>
)
}

export default checkout