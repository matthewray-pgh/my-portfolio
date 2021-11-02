import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { Navigation } from "./Navigation";

import "../styles/App.css";
import "../styles/Header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [userName, setUserName] = useState("UserName 12345");

  return (
    <Fragment>
      <header className="header-bar">
        <section className="site-branding">
          <Link to="/" className="branding-link">
            <FontAwesomeIcon
              className="branding-link__icon"
              icon={faLaptopCode}
            />
            <h1 className="branding-link__title">My Stuff</h1>
          </Link>
        </section>

        <section className="navigation">
          <nav className="navigation-options">
            <ul>
              <li>
                <Link to="/fourHourBody">4 Hour Body</Link>
              </li>
              <li>
                <Link to="/containers">Containers</Link>
              </li>
              <li>
                <Link to="/businessTracker">Success Club</Link>
              </li>
              <li>
                <Link to="/fortniteRandom">Fortnite</Link>
              </li>
              <li className="mobile-only">
                <Link to="">Log Out</Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="mobileButtonMenuToggle"
            onClick={() => setShowNav(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </section>

        {/* <section id="auth" className="auth">
        <div>
          <label>logged in: {}</label>
        </div>
        <div>
          <button>Log out</button>
        </div>
      </section> */}
      </header>
      <Navigation isVisible={showNav} toggle={setShowNav} userName={userName} />
    </Fragment>
  );
};

export default Header;
