import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faRedoAlt,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import locations from "../assets/fortniteLocations.json";
import "../styles/FortniteStuff.css";

const FortniteStuff = () => {
  const [location, setLocation] = useState("");
  const [showList, setShowList] = useState(true);

  const randomNumber = () => {
    var randomNumber = Math.random();
    var randomized = Math.round(randomNumber * locations.length);

    setLocation(locations[randomized]);

    console.log("Starting loop");

    var interval = setInterval(function () {
      console.log("Let's repeat for 2 seconds...");
    }, 100);

    setTimeout(function () {
      clearInterval(interval);

      console.log("Finished loop");
    }, 2000);
  };

  const resetRandom = () => {
    setLocation("");
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <main>
      <header className="fortnite__header">
        <h2 className="fortnite__header-title">Fortnite locations</h2>
        <p className="fortnite__header-text">
          sample sentence explaining what this page is meant to do.
        </p>
      </header>

      <article className="fortnite-container">
        <section>
          <button type="button" onClick={randomNumber} className="buttonStyle">
            <FontAwesomeIcon icon={faRandom} />
          </button>

          <p className="output">{location}</p>

          <button type="button" onClick={resetRandom} className="buttonStyle">
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        </section>

        <section>
          <button type="button" onClick={toggleList} className="buttonStyle">
            <FontAwesomeIcon icon={showList ? faEyeSlash : faEye} />
          </button>

          <div style={{ display: showList ? "block" : "none" }}>
            {locations.map((item, index) => {
              return (
                <p key={index} className="listItem">
                  {item}
                </p>
              );
            })}
          </div>
        </section>
      </article>
    </main>
  );
};

export default FortniteStuff;
