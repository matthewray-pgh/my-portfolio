import React, { useState, useMemo } from "react";

import DrawBars from "./charts/DrawBars";
import useCharts from "../components/charts/useCharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    <main className="App-body">
      <h2>Containers</h2>
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
            <g>
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

      <section className="containers__form">
        <button className="containers__form-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <p>form to add meal and edit containers</p>
      </section>
    </main>
  );
};

export default Containers;
