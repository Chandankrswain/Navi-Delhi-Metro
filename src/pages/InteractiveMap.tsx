import React from "react";
const handleStationClick = (stationName: string) => {
  alert(`You clicked on ${stationName}`);
};
const InteractiveMap = () => {
  return (
    <div>
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        <circle
          cx="100"
          cy="100"
          r="10"
          fill="red"
          onClick={() => handleStationClick("Station A")}
        />
        <circle
          cx="400"
          cy="100"
          r="10"
          fill="green"
          onClick={() => handleStationClick("Station B")}
        />
      </svg>
    </div>
  );
};

export default InteractiveMap;
