import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../styles/Navigation.css";

export const Navigation = (props) => {
  return (
    <section
      className={props.isVisible ? "navigation-menu active" : "navigation-menu"}
    >
      <div className="navigation-menu__header">
        <button
          type="button"
          className="button__navClose"
          onClick={() => props.toggle(!props.isVisible)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <section className="navigation-menu__profile">
        <div className="navigation-menu__profile--icon">
          <FontAwesomeIcon icon={faUserCircle} size />
        </div>
        <div className="navigation-menu__profile--text">
          <p>Hello, {props.userName}</p>
        </div>
      </section>

      <nav className="navigation-menu__options">
        <ul>
          <li>
            <Link to="/" onClick={() => props.toggle(!props.isVisible)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/containers"
              onClick={() => props.toggle(!props.isVisible)}
            >
              Containers
            </Link>
          </li>
          <li>
            <Link
              to="/businessTracker"
              onClick={() => props.toggle(!props.isVisible)}
            >
              Success Club
            </Link>
          </li>
          <li>
            <Link
              to="/fortniteRandom"
              onClick={() => props.toggle(!props.isVisible)}
            >
              Fortnite
            </Link>
          </li>
          <li
            className="mobile-only"
            onClick={() => props.toggle(!props.isVisible)}
          >
            <Link to="">Log Out</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
