import React from 'react'
import artist from "./Artist.module.css"
import { useState } from 'react'

function Artist({ name, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
      <div className={artist.collapseDiv}>
        <button className={artist.collapseDivBtn} onClick={() => setIsCollapsed(!isCollapsed)}>
          {name} {isCollapsed ? '+' : '-'}
        </button>
        
        {!isCollapsed && children}
      </div>
    );
  }

export default Artist