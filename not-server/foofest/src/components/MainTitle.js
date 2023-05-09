import React from 'react'
import mainTitleStyle from "./MainTitle.module.css"

function MainTitle({mainTitle}) {
  return (
    <h1 className={mainTitleStyle.mainTitle}>{mainTitle}</h1>
  )
}

export default MainTitle