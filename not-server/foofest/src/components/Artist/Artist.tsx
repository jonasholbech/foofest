import React from "react";
import artist from "./Artist.module.css";
import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/Bs";

function Artist({ name, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={artist.collapseDiv}>
      <div
        className={artist.collapseDivBtn}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>{name}</p>{" "}
        <span>
          {isCollapsed ? (
            <BsChevronDown size={30} />
          ) : (
            <BsChevronUp size={30} />
          )}
        </span>
      </div>

      {!isCollapsed && children}
    </div>
  );
}

export default Artist;
