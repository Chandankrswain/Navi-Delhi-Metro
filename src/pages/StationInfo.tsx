import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { StationData } from "../utils/api";
import NearbyPlacesCard from "../Components/NearbyPlacesCard";

interface StationInfoType {
  station_name: string;
  id: number;
}

const StationInfo = () => {
  const [stationData, setStationData] = useState<StationInfoType>();
  const stationInfoData = new StationData();

  console.log(stationData);

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
        <NearbyPlacesCard stationDetails={stationData} />
      ) : (
        <p className="text-white">Loading station details...</p>
      )}
    </div>
  );
};

export default StationInfo;
