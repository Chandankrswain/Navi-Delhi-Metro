import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StationData } from "../utils/api";
import Navbar from "../Components/Navbar";

interface LineInfoType {
  station_code: string;
  status: string;
  station_name: string;
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
    FetchLineData("LN1");
  }, []);

  return (
    <div className="text-white">
      <Navbar />
    </div>
  );
};

export default LineInfo;
