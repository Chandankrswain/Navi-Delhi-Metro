import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StationData } from "../utils/api";
import Navbar from "../Components/Navbar";
import LineInfoLowerContainer from "../Components/LineInfoLowerContainer";
import LineInfoUpperContainer from "../Components/LineInfoUpperContainer";

interface LineInfoType {
  data?: Record<string, any>[];
}

const LineInfo = () => {
  const [lineStationData, setLineStationData] = useState<LineInfoType[]>([]);
  const [lineData, setLineData] = useState<LineInfoType[]>([]);
  const lineParams = useParams();

  const lineInfoData = new StationData();

  const FetchLineData = async (value: string) => {
    if (value) {
      const lineDataResult = await lineInfoData.getLineData(value);
      const lineStationDataResult = await lineInfoData.getLineStationsData(
        value
      );

      setLineStationData(lineStationDataResult);
      setLineData(lineDataResult);
    }
  };

  useEffect(() => {
    FetchLineData(lineParams?.lineCode || "");
  }, [lineParams?.lineCode]);

  return (
    <div className="text-white">
      <Navbar />
      {lineData?.length > 0 ? (
        <LineInfoUpperContainer lineData={lineData} />
      ) : (
        <p className="text-white  text-6xl">Loading line details...</p>
      )}
      {lineStationData?.length > 0 ? (
        <LineInfoLowerContainer lineStationData={lineStationData} />
      ) : (
        <p className="text-white text-6xl ">Loading all station list...</p>
      )}
    </div>
  );
};

export default LineInfo;
