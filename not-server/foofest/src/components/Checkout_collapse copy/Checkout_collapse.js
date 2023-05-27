import React from 'react'
import styles from "./Checkout_collapse.module.css"
import { useState } from 'react'

function Checkout_collapse({ name, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
      <div className={styles.collapseDiv}>
        <button className={styles.collapseDivBtn} onClick={() => setIsCollapsed(!isCollapsed)}>
          {name} {isCollapsed ? '+' : '-'}
        </button>
        
        {!isCollapsed && children}
      </div>
    );
  }

export default Checkout_collapse;