import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/4HB.css";
import {
  faBreadSlice,
  faRedoAlt,
  faGlassCheers,
  faAppleAlt,
  faCookieBite,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

const fourHourBody = () => {
  const foodRules = [
    {
      icon: faBreadSlice,
      title: "Avoid White Carbs",
      text: "Nothing white is good for you.",
    },
    {
      icon: faRedoAlt,
      title: "Eat the same meals, again and again...",
      text: "Most food is garbage, so stick to the stuff that is healthy.",
    },
    {
      icon: faGlassCheers,
      title: "Don't drink calories",
      text: "Only drink water. No pop, milk, or alcohol.",
    },
    {
      icon: faAppleAlt,
      title: "Don't eat fruit",
      text: "We don't need fruits. Unnecessary sugars.",
    },
    {
      icon: faCookieBite,
      title: "Binge Once a week",
      text: "Eat everything you want, once every seven days.",
    },
  ];
  return (
    <main className="fourHourBody">
      <header className="fourHourBody__header">
        <article className="fourHourBody__content">
          <FontAwesomeIcon className="fourHourBody__icon" icon={faHistory} />
          <h2 className="fourHourBody__title">4-Hour Body</h2>
          <p className="fourHourBody__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </article>
      </header>

      <h2>The Food Rules</h2>
      <section className="rules">
        {foodRules.map((rule, i) => {
          return (
            <article className="rules__article">
              <div className="rules__icon">
                <FontAwesomeIcon icon={rule.icon} />
              </div>
              <h2 className="rules__title">{rule.title}</h2>
              <p className="rules__text">{rule.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default fourHourBody;
