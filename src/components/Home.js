import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faClipboardCheck,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <article className="about">
        <section className="about__content">
          <h2 className="about__title">Welcome to my stuff!</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </article>

      <section className="details">
        <article className="details__article">
          <div className="details__icon first">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <h2 className="details__title">Containers</h2>
          <p className="details__text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>

        <article className="details__article">
          <div className="details__icon second">
            <FontAwesomeIcon icon={faClipboardCheck} />
          </div>
          <h2 className="details__title">Success Tracker</h2>
          <p className="details__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>

        <article className="details__article">
          <div className="details__icon third">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </div>
          <h2 className="details__title">Fortnite Locations</h2>
          <p className="details__text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
