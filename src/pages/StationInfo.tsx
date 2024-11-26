import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { StationData } from "../utils/api";
import StationInfoPageCards from "../Components/StationInfoPageCards";

interface StationInfoType {
  station_name: string;
  id: number;
  nearby_places: Record<string, any>[];
}

const StationInfo = () => {
  const [stationData, setStationData] = useState<StationInfoType>();
  const stationInfoData = new StationData();

  const FetchStationDetails = async (value: string) => {
    const result = await stationInfoData.getStationBriefInfo(value);
    setStationData(result);
  };

  useEffect(() => {
    FetchStationDetails("RN");
  }, []);

  return (
    <div>
      <Navbar />
      {stationData ? (
        <StationInfoPageCards stationDetails={stationData} />
      ) : (
        <p className="text-white">Loading station details...</p>
      )}
    </div>
  );
};

export default StationInfo;
