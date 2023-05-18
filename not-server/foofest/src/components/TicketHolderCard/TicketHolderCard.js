import React from 'react'
import styles from "./TicketHolderCard.module.css"

function TicketHolderCard({num}) {
  return (
    <form className={styles.form}>
        <h3 className={styles.h3}>Ticket no. {num}</h3>

        <div className={styles.innerAlign}>
        <label  className={styles.fullNameLabel}>Full name</label>
            <input
            id="fullname"
            className={styles.fullName}
            placeholder='Miss Fiona Charming'
            required
            />
        </div>

        <div className={styles.innerAlign}>

        <label className={styles.emailLabel}>Email</label>
            <input
            id="email"
            className={styles.email}
            placeholder='fiona@charming.com'
            required
            />
        </div>

        <div className={styles.radioAlign}>
            
            <input
            type="radio"
            id="radio"
            className={styles.radio}
            />
            
            <label  className={styles.emailLabel}>Use this information for checkout</label>


        </div>
        

    </form>
  )
}

export default TicketHolderCard

