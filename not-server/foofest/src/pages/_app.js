import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { TicketsContext } from '@/context/ticketsContext'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [costOfTickets, setCostOfTickets] = useState(0)
  const [ticketsPlusTents, setTicketsPlusTents] = useState(0);

  return ( 
    <>
      <TicketsContext.Provider value={{costOfTickets, setCostOfTickets, ticketsPlusTents, setTicketsPlusTents}}>
             <Layout>
            <Component {...pageProps} />
            </Layout>

      </TicketsContext.Provider>
  
  </>
  )
}

