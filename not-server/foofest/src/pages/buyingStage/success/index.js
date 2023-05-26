import React from 'react'
import styles from "./success.module.css"
import Link from 'next/link'
import Button from '@/components/button/Button'



function index() {
  return (
    <>
    <main className={styles.main}>
  
  <section className={styles.details} >

  

    <div className={styles.deliveryDiv}>

      <span className={styles.deliveryTitle}><strong>Thank you for your purchase!</strong></span>

      <div className={styles.individualCostsDiv}>

        <span>We've sent the tickets to the provided address/email.</span>

      </div>

      

    </div>  

   

    <div className={styles.nextStep}>

      <Link href="/"
      >
      <Button 
      title="HOME"
      />
      </Link>
    </div>
   
   

  </section>
</main>
</>
  )
}

export default index