import { useMemo } from "react";

import { scaleLinear, scaleBand } from "d3-scale";

function useCharts(data, width, height, margin) {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const yAxisData = useMemo(() => {
    return data.map((d, i) => i);
  }, [data]);

  console.log("yAxisData", yAxisData);

  //domain max needs to calucate off of total available containers
  const xScale = scaleLinear().domain([0, 6]).range([0, xMax]);
  const yScale = scaleBand().domain(yAxisData).range([0, yMax]).padding(0.1);

  return {
    xMax,
    yMax,
    xScale,
    yScale,
    yAxisData,
  };
}

export default useCharts;
