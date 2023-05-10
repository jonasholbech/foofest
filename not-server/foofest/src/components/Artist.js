import React from 'react'
import music from "./Artist.module.css"
import Image from 'next/image';

function Artist({name, genre}) {

  return (
    <>
    <article className={music.artist_card}>
        <h3 className={music.name}>{name}</h3>
  
        <span className={music.genre}>{genre}</span>
        
    </article>
    </>
  )
}

export default Artist