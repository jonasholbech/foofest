import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { TicketsContext } from "../context/ticketsContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // which camp did you click on?
  const [selectedCamp, setSelectedCamp] = useState("");

  // how many tickets were purchased?
  const [howManyTickets, setHowManyTickets] = useState(0);

  // how much do the tickets cost?
  const [costOfTickets, setCostOfTickets] = useState(0);

  // how much do the tickets + the tents cost?
  const [ticketsPlusTents, setTicketsPlusTents] = useState(0);

  // how much does the camping cost?
  const [totalCampingCost, setTotalCampingCost] = useState(0);

  // make ticket holders' info available globaly
  const [globalFormName, setGlobalFormName] = useState([]);
  const [globalFormEmail, setGlobalFormEmail] = useState([]);

  // what's the overall VAT?
  const [globalVat, setGlobalVat] = useState(0);

  // global delivery object
  const [deliveryObject, setDeliveryObject] = useState()

  // Save reservation ID globally
  const [globalReservationId, setGlobalReservationId] = useState(null)

  return (
    <>
      <TicketsContext.Provider
        value={{
          howManyTickets,
          setHowManyTickets,
          costOfTickets,
          setCostOfTickets,
          ticketsPlusTents,
          setTicketsPlusTents,
          totalCampingCost,
          setTotalCampingCost,
          globalFormName,
          setGlobalFormName,
          globalFormEmail,
          setGlobalFormEmail,
          globalVat,
          setGlobalVat,
          selectedCamp,
          setSelectedCamp,
          deliveryObject, 
          setDeliveryObject,
          globalReservationId,
          setGlobalReservationId
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TicketsContext.Provider>
    </>
  );
}
