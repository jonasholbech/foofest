import React from 'react'
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle'
import styles from "./Stage.module.css"

function Stage({stageTitle}) {
  return (
    <>

    <div className={styles.stage}>
        
        <SecondaryTitle
        secondaryTitle={stageTitle}
        />
        
    </div>

    
    </>
  )
}

export default Stage