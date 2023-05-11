import React from 'react'
import { useEffect, useState, useRef } from 'react';
import bands from "./Bands.module.css"
import Artist from '@/components/Artist/Artist';
import MainTitle from '@/components/MainTitle/MainTitle';

function Bands() {

  // EXTRA INFO AFTER YOU CLICK THE ARTIST

  const [extraInfo, setExtraInfo] = useState([])


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

      <Artist 
      key={artists.indexOf(musician)}
      name={musician.name}
      bio={musician.bio}
      genre={musician.genre}
      members={musician.members}
      alt={musician.logoCredits}
      />
  //      <article className={bands.artist_card} key={artists.indexOf(musician)}>
  //        <h3 className={bands.name}>{musician.name}</h3>
  //        <p>{extraInfo.bio}</p> 
  //        <span className={bands.genre}>{musician.genre}</span>
  //        <button className={bands.button} onClick={() => displayModal({musician})}>INFO</button>
  //      
  //      </article>
   
    )
  })

  //


  // how can you add a p tag on the article once you click on the btn?

  function displayModal({musician}){

    setExtraInfo(musician);    
    
  }

  

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