import React from 'react'
import music from "./Artist.module.css"
import Image from 'next/image';

function Artist({name, genre, bio, members, logo}) {

 


// if it is an http image, it has to be wrapped in " "
// if it's not, it has to be inside {}

  return (
    <>
    <article className={music.artist_card}>
        <h3 className={music.name}>{name}</h3>
        <p className={music.bio}>{bio}</p>
        <span className={music.members}>Members: {members}</span>
        <span>{genre}</span>
        
      <img src={logo}>
      </img>
        
    </article>
    </>
  )
}

export default Artist