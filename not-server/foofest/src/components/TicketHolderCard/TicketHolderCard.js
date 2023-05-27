import React, { useEffect } from 'react'
import styles from "./TicketHolderCard.module.css"
import { useState, useRef } from 'react';

function TicketHolderCard({num, getName, getEmail}) {

const [isClicked, setIsClicked] = useState("");

function checkThisBox(num){
  setIsClicked(num);
}

const emailInput = useRef();
const nameInput = useRef();



  return (
    <form className={styles.form}>
        <h3 className={styles.h3}>Ticket no. {num}</h3>

        <div className={styles.innerAlign}>
        <label  className={styles.fullNameLabel}>Full name</label>
            <input
            ref={nameInput}
            id="fullname"
            className={styles.fullName}
            placeholder='Miss Fiona Charming'
            required
            onBlur={() => getName(num, nameInput.current.value)}
            />
        </div>

        <div className={styles.innerAlign}>

        <label className={styles.emailLabel}>Email</label>
            <input
            ref={emailInput}
            id="email"
            className={styles.email}
            placeholder='fiona@charming.com'
            required
            onBlur={() => getEmail(num, emailInput.current.value)}
            />
        </div>

        

    </form>
  )
}

export default TicketHolderCard

