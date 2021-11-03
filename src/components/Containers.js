/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from "react";

import DrawBars from "./charts/DrawBars";
import useCharts from "../components/charts/useCharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "../styles/Containers.css";

const Containers = () => {
  const [totals, setTotals] = useState([
    { name: "green", color: "#25B22B", total: 6, daily: 0 },
    { name: "purple", color: "#5625B2", total: 5, daily: 0 },
    { name: "red", color: "#B22525", total: 3, daily: 0 },
    { name: "yellow", color: "#F9E076", total: 4, daily: 1 },
    { name: "blue", color: "#134CF1", total: 2, daily: 0 },
    { name: "orange", color: "#ED7700", total: 2, daily: 0 },
    { name: "spoon", color: "#7F7F7F", total: 4, daily: 0 },
  ]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const increment = (data, index) => {
    totals[index].daily = data.daily + 1;
    setTotals(totals);
  };

  const decrement = (data, index) => {
    totals[index].daily = data.daily > 0 ? data.daily - 1 : 0;
    setTotals(totals);
  };

  const width = 400;
  const height = 500;
  const margin = {
    top: 10,
    left: 60,
    bottom: 10,
    right: 10,
  };
  const fontSize = 16;

  const { xScale, yScale, yAxisData } = useCharts(
    totals,
    width,
    height,
    margin
  );

  const [yStart, yEnd] = useMemo(() => {
    return yScale.range();
  }, [yScale]);

  return (
    <main className="containers">
      <header className="containers__header">
        <h2 className="containers__header-title">Containers</h2>
      </header>
      <svg width={width} height={height}>
        <line
          x1={margin.left}
          x2={margin.left}
          y1={yStart}
          y2={yEnd}
          stroke={"#000"}
          strokeWidth={2}
        ></line>

        <DrawBars left={0} top={0} />

        {totals.map((d, i) => {
          return (
            <g key={`${d.name}-${i}`}>
              <text
                key={`axis-text-${i}`}
                x={margin.left - 10}
                y={yScale(i) + yScale.bandwidth() / 2 + fontSize / 2}
                textAnchor="end"
                fill="#000"
                fontSize={fontSize}
              >
                {d.name}
              </text>

              <rect
                key={`bar-backbround-${d.name}-${i}`}
                x={margin.left}
                y={yScale(i)}
                height={yScale.bandwidth()}
                width={xScale(d.total)}
                fill={d.color}
                fillOpacity={0.25}
              />

              <rect
                key={`bar-${d.name}-${i}`}
                x={margin.left}
                y={yScale(i)}
                height={yScale.bandwidth()}
                width={xScale(d.daily)}
                fill={d.color}
                fillOpacity={0.75}
              />

              <text
                key={`daily-text-${i}`}
                x={margin.left + 10}
                y={yScale(i) + yScale.bandwidth() / 2 + fontSize / 2}
                textAnchor="start"
                fill="#fff"
                fontSize={fontSize}
                fontWeight="bold"
              >
                {d.daily}
              </text>
            </g>
          );
        })}
      </svg>

      <section
        className={showForm ? "containers__form active" : "containers__form"}
      >
        <a
          onClick={toggleForm}
          className={
            showForm
              ? "containers__form-button--display active"
              : "containers__form-button--display"
          }
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </a>

        <form>
          <section className="form__number-section">
            {totals.map((d, i) => {
              return (
                <div className="form__number-container" key={`${d.name}-${i}`}>
                  <button
                    type="button"
                    className="form__number-button--minus"
                    onClick={() => decrement(d, i)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input type="text" className="form__number" value={d.daily} />
                  <button
                    type="button"
                    className="form__number-button--plus"
                    onClick={() => increment(d, i)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              );
            })}
          </section>

          <div className="form__text-container">
            <label htmlFor="txtMealName" className="form__text-label">
              Meal Name
            </label>
            <input id="txtMealName" type="text" className="form__text"></input>
          </div>
          <button type="button" className="form__button">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
};

export default Containers;
