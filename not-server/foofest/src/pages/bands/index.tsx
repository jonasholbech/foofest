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
            <div className={bands.imageAndInfo}>
              <div className={bands.imageAndSpan}>
                <div className={bands.bandImage}>
                  {musician.logo.includes("https") ? (
                    <Image
                      src={musician.logo}
                      width={600}
                      height={600}
                      className={bands.imgStyle}
                      alt={"img of band"}
                    />
                  ) : (
                    <Image
                      src={(addGlitchRoute += musician.logo)}
                      width={600}
                      height={600}
                      className={bands.imgStyle}
                      alt={musician.logoCredits ? musician.logoCredits : ""}
                    />
                  )}
                </div>

                <p className={bands.creditSpan}>{musician.logoCredits}</p>
              </div>

              <div className={bands.artistInfo}>
                <p className={bands.when}>
                  <span className={bands.whenTitle}>When:</span>
                  <span className={bands.whenData}>Wednesday 22:00-24:00</span>
                </p>
                <p className={bands.location}>
                  <span className={bands.locationTitle}>Location:</span>
                  <span className={bands.locationData}>Vanaheim</span>
                </p>
                <p className={bands.genre}>
                  <span className={bands.genreTitle}>Genre:</span>
                  <span className={bands.genreData}>{musician.genre}</span>
                </p>
              </div>
            </div>

            <div className={bands.artistData}>
              {/* <h3 className={bands.name}>{musician.name}</h3> */}

              <p className={bands.bio}>{musician.bio}</p>

              <p className={bands.members}>
                <span className={bands.membersTitle}>Members:</span>
                <span className={bands.membersData}>{musician.members}</span>
              </p>
            </div>
          </article>
        </Artist>
      </div>
    );
  });

  return (
    <>
      <MainTitle mainTitle="BANDS" />

      <div className={bands.bandsContainer}>{artistVariable}</div>
    </>
  );
}

export default Bands;
