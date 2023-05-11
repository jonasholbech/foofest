import React from 'react'
import artist from "./Artist.module.css"

function Artist({name, bio, genre, members, alt}) {

    if(!alt){
        alt = "."
    }


  return (
    <>
            <article className={artist.artist_card}>
                
                <img className={artist.artistImg} alt={alt}></img>
                
                
                <div className={artist.artistData}>
                    <h3 className={artist.name}>{name}</h3>
                    <p className={artist.bio}>Biography: {bio}</p> 
                    <span className={artist.members}>Band Members: {members}</span>

                    <span className={artist.genre}>Genre: {genre}</span>
                </div>
        
            </article>
    </>
  )
}

export default Artist