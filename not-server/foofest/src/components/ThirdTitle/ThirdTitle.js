import React from 'react'
import third from "./ThirdTitle.module.css"

function ThirdTitle({thirdTitle}) {
  return (
    <h2 className={third.thirdTitle}>{thirdTitle}</h2>
  )
}

export default ThirdTitle