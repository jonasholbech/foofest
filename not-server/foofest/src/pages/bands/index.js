import React from 'react'
import { useEffect, useState, useRef } from 'react';
import bands from "./Bands.module.css"
import Artist from '@/components/Artist/Artist';
import MainTitle from '@/components/MainTitle/MainTitle';

function Bands() {

  // DISPLAYING ARTISTS

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const api = `http://localhost:8080/bands`;


  let fetchRes = fetch(api);
  fetchRes
    .then((res) => res.json())
    .then((data) => {
     setArtists(data);
     
    })
    .catch((err) => {
      console.error(err);
    });
  }, [])

  const artistVariable = artists.map((musician) => {


    return (

      <div>
        <Artist name={musician.name}>

        <article className={bands.artist_card}>
              
              <img className={bands.artistImg}></img>
              
              
              <div className={bands.artistData}>
                  <h3 className={bands.name}>{musician.name}</h3>
                  <p className={bands.bio}>Biography: {musician.bio}</p> 
                  <span className={bands.members}>Band Members: {musician.members}</span>

                  <span className={bands.genre}>Genre: {musician.genre}</span>
              </div>

              
      
        </article>

      </Artist>

    </div>
        
    )   
     
 //     <Artist 
 //     key={artists.indexOf(musician)}
 //     name={musician.name}
 //     bio={musician.bio}
 //     genre={musician.genre}
 //     members={musician.members}
 //     alt={musician.logoCredits}
 //     />
   
  //  )
  })

  //




  

  return (
    <>

    <MainTitle
    mainTitle="BANDS"
    />
    
    <ul className={bands.musical_ul}>
    {artistVariable}
    </ul>


    </>
  )
}

export default Bands