import React from 'react'
import secondary from "./SecondaryTitle.module.css"

function SecondaryTitle({secondaryTitle}) {
  return (
    <h2 className={secondary.secondaryTitle}>{secondaryTitle}</h2>
  )
}

export default SecondaryTitle