import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Artist from '@/components/Artist'
import styles from "./Line_up.module.css"
import MainTitle from '@/components/MainTitle'



function Line_up() {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
      const api = `http://localhost:8080/bands`;
  
  
    let fetchRes = fetch(api);
    fetchRes
      .then((res) => res.json())
      .then((data) => {
       setArtists(data);
       console.log(data);
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


  return (
    <>
    <MainTitle
    mainTitle="LINE UP"
    />
    <ul className={styles.musical_ul}>
    {artistVariable}
    </ul>
    </>
  )
}

export default Line_up