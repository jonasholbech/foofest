import React from 'react'
import music from "./Artist.module.css"

function Artist({name, genre, bio, members, key}) {
  return (
    <>
    <article className={music.artist_card} id={key}>
        <h3 className={music.name}>{name}</h3>
        <p className={music.bio}>{bio}</p>
        <span className={music.members}>Members: {members}</span>
        <span>{genre}</span>
    </article>
    </>
  )
}

export default Artist