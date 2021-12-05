import React from "react";
import Header from "../components/Header";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faClipboardCheck,
  faMapMarkedAlt,
  faUtensils,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <article className="about">
        <Header />
        <section className="about__content">
          <FontAwesomeIcon className="about__icon" icon={faLaptopCode} />
          <h2 className="about__title">Hi, I am a developer!</h2>
          <p className="about__text">
            Welcome to my stuff! I have spent the last 20 years in web site &
            applicaton development. Here is just a peek at some of my
            development & design work.
          </p>
        </section>
      </article>

      <section></section>

      <section className="details">
        <h2 className="details__header">Demos</h2>
        <div className="details__content">
          <Link to="/fourHourBody">
            <article className="details__article">
              <div className="details__icon new">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <h2 className="details__title">Four Hour Body</h2>
              <p className="details__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </Link>
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
        </div>
      </section>

      <section className="contact">
        <h2 className="contact__header">Contact Me</h2>
        <div className="constact__content"></div>
      </section>
    </main>
  );
}

export default Home;
