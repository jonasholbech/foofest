import React, { useContext } from "react";
import TicketsContext from "@/context/ticketsContext";
import Timer from "../Timer/Timer";

import law from "./Layout.module.css";

import { useState } from "react";

import NavBurger from "../NavBurger/NavBurger";
import BottomNav from "../BottomNav/BottomNav";

const Layout = ({ children }) => {
  // burger menu control
  const [navOpen, setNavOpen] = useState(false);

  const globalValues = useContext(TicketsContext);
  // create a setTimeout that counts to 5 min

  return (
    <div>
      <header className={law.headerBox}>
        <NavBurger />

        {/* THE TIMER ONLY SHOWS UP AFTER YOU HAVE PICKED AT LEAST 1 TICKET */}
        {globalValues.howManyTickets === 0 ? "" : <Timer />}
      </header>
      <main>{children}</main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Layout;
