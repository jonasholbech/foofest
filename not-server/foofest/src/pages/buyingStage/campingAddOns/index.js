import React from 'react'
import { useContext } from 'react'
import TicketsContext from '@/context/ticketsContext'



function campingAddOns() {


const globalMoneyContext = useContext(TicketsContext);

  return (
    <div> You made it to step 2, nice

      <h2>{globalMoneyContext.costOfTickets}</h2>
      
    </div>
  )
}

export default campingAddOns