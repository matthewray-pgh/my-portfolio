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
      text: "Nothing white is good for you. No breads, rice, or anything else. Avoid any foods that are, or can be white.",
      background: "rule__bg-image--bread",
    },
    {
      icon: faRedoAlt,
      title: "Eat the same meals",
      text: "Most food is garbage, so stick to the stuff that is healthy. Mix and match from 3 groups, protiens (egg white, eggsm chicken breast, beef,, fish, pork. legumes, lentil, black beans, red beans, pinto, soy. vegetables: spinach, brocoli cauilfour, aspargus, peas green beans",
      background: "rule__bg-image--meals",
    },
    {
      icon: faGlassCheers,
      title: "Don't drink calories",
      text: "Only drink water. No pop, milk, or alcohol. Drink massive amounts of water, tea, or coffee. Limit diet soft drinks as well. Dry red wines are allowed, but no more than 2 glasses per evening",
      background: "rule__bg-image--drink",
    },
    {
      icon: faAppleAlt,
      title: "Don't eat fruit",
      text: "We don't need fruits. Unnecessary sugars equal fat storage. Only exception of tomatoes and avacados",
      background: "rule__bg-image--fruit",
    },
    {
      icon: faCookieBite,
      title: "One day a week off",
      text: "Dieters gone wild and binge everything you want, once every seven days. This will increase metabolic rate once a week.",
      background: "rule__bg-image--binge",
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

      <h2>The Slow Carb Diet</h2>

      <section className="rule">
        {foodRules.map((rule, i) => {
          return (
            <article className="rule__container">
              <div className={rule.background}>
                <div className="rule__number">{i + 1}</div>
              </div>
              <div>
                <h2 className="rules__title">{rule.title}</h2>
                <p className="rules__text">{rule.text}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default fourHourBody;
