import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { StationData } from "../utils/api";

import StationBanner from "../Components/StationBanner";
import { useParams } from "react-router-dom";
import EmergencyCardContainer from "../Components/EmergencyCardContainer";

interface StationInfoType {
  station_name: string;
  station_code: string;
  id: number;
  nearby_places: Record<string, any>[];
  previous_next_stations: Record<string, any>[];
  line_id: number;
  metro_lines: Record<string, any>[];
  Hospital : Record<string, any>[];
}

const StationInfo = () => {
  const [stationData, setStationData] = useState<StationInfoType>();
  const stationParam = useParams();
  const stationInfoData = new StationData();
  const FetchStationDetails = async (value?: string) => {
    if (value) {
      const result = await stationInfoData.getStationBriefInfo(value);
      setStationData(result);
    }
  };

  useEffect(() => {
    FetchStationDetails(stationParam?.stationCode);
  }, [stationParam?.stationCode]);

  return (
    <div>
      <Navbar />
      <StationBanner stationBannerData={stationData} />
      {stationData ? (
        <EmergencyCardContainer stationCardData={stationData} />
      ) : (
        <p className="text-white">Loading station details...</p>
      )}
    </div>
  );
};

export default StationInfo;
