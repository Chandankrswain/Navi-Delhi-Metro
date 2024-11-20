import React from "react";
import { useParams } from "react-router-dom";
import { StationData } from "../utils/api";

const StationInfo = () => {
  const { stationCode } = useParams();
  console.log(stationCode);
  return <div>StationInfo</div>;
};

export default StationInfo;
