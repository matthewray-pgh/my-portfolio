import React, { useRef } from "react";

const DrawBars = (left, top) => {
  const gBarsElement = useRef();

  return (
    <g
      className="xAxisBottom"
      ref={gBarsElement}
      transform={`translate(${left}, ${top})`}
    />
  );
};

export default React.memo(DrawBars);
