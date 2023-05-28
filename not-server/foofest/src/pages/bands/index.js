import React from "react";
import { useEffect, useState, useRef } from "react";
import bands from "./Bands.module.css";
import Artist from "../../components/Artist/Artist";
import MainTitle from "../../components/MainTitle/MainTitle";
import Image from "next/image";

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
  }, []);

  const artistVariable = artists.map((musician) => {
    let addGlitchRoute = "https://fierce-veiled-exception.glitch.me/logos/";

    return (
      <div key={artists.indexOf(musician)}>
        <Artist name={musician.name} key={artists.indexOf(musician)}>
          <article className={bands.artist_card}>
            <div className={bands.imageAndSpan}>
              {musician.logo.includes("https") ? (
                <Image
                  src={musician.logo}
                  width={100}
                  height={300}
                  className={bands.artistImg}
                  alt={"img of band"}
                />
              ) : (
                <Image
                  src={(addGlitchRoute += musician.logo)}
                  width={100}
                  height={200}
                  className={bands.artistImg}
                  alt={musician.logoCredits ? musician.logoCredits : ""}
                />
              )}

              <p className={bands.creditSpan}>{musician.logoCredits}</p>
            </div>

            <div className={bands.artistData}>
              <h3 className={bands.name}>{musician.name}</h3>
              <p className={bands.bio}>Biography: {musician.bio}</p>
              <span className={bands.members}>
                Band Members: {musician.members}
              </span>
              <span className={bands.genre}>Genre: {musician.genre}</span>
            </div>
          </article>
        </Artist>
      </div>
    );
  });

  return (
    <>
      <MainTitle mainTitle="BANDS" />

      <ul className={bands.musical_ul}>{artistVariable}</ul>
    </>
  );
}

export default Bands;
