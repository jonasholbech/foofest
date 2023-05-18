import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { TicketsContext } from '@/context/ticketsContext'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  // how many tickets were purchased?
  const [howManyTickets, setHowManyTickets] = useState(0);
  
  
  // how much do the tickets cost?
  const [costOfTickets, setCostOfTickets] = useState(0)

    // how much do the tickets + the tents cost?
  const [ticketsPlusTents, setTicketsPlusTents] = useState(0);


  return ( 
    <>
      <TicketsContext.Provider value={{howManyTickets, setHowManyTickets, costOfTickets, setCostOfTickets, ticketsPlusTents, setTicketsPlusTents}}>
             <Layout>
            <Component {...pageProps} />
            </Layout>

      </TicketsContext.Provider>
  
  </>
  )
}

