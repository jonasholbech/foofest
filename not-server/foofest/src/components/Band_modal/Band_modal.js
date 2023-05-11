import React from 'react'
import band from "./Band_modal.module.css"

function Band_modal({name, bio, members}) {
  return (
    <>
        <div className={band.modal}>
                
            <h3 className={band.bandName}>{name}</h3>
            <p className={band.bandBio}>{bio}</p>
            <p className={band.bandMembers}>{members}</p>
                
        </div>
    </>
  )
}

export default Band_modal