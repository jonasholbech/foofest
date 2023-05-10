import React from 'react'
import Artist from '@/components/Artist';
import { useEffect, useState } from 'react';
import bands from "./Bands.module.css"

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
    <Artist 
    key={artists.indexOf(musician)}
      bio={musician.bio}
      genre={musician.genre}
      members={musician.members}
      name={musician.name}
    />
    )
  })

  //
  //
  //


  return (
    <>
    <ul className={bands.musical_ul}>
    {artistVariable}
    </ul>

    </>
  )
}

export default Bands