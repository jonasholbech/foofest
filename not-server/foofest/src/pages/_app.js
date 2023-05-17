import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { TicketsContext } from '@/context/ticketsContext'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [costOfTickets, setCostOfTickets] = useState("default")

  return ( 
    <>
      <TicketsContext.Provider value={{costOfTickets, setCostOfTickets}}>
             <Layout>
            <Component {...pageProps} />
            </Layout>

      </TicketsContext.Provider>
  
  </>
  )
}

