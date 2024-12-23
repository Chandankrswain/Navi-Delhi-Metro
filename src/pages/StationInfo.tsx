import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { StationData } from "../utils/api";
import StationBanner from "../Components/StationBanner";
import { useParams } from "react-router-dom";
import EmergencyCardContainer from "../Components/EmergencyCardContainer";
import StationFacilityContainer from "../Components/StationFacilityContainer";
import StationGateContainer from "../Components/StationGateContainer";
import StationLiftContainer from "../Components/StationLiftContainer";
import StationServicesContainer from "../Components/StationServicesContainer";
import ParkingContainer from "../Components/ParkingContainer";
import StationPlatformContainer from "../Components/StationPlatformContainer";

interface StationInfoType {
  station_name: string;
  station_code: string;
  id: number;
  nearby_places: Record<string, any>[];
  previous_next_stations: Record<string, any>[];
  line_id: number;
  metro_lines: Record<string, any>[];
  station_facility: Record<string, any>[];
  gates: Record<string, any>[];
  lifts: Record<string, any>[];
  stations_facilities: Record<string, any>[];
  parkings: Record<string, any>[];
  platforms: Record<string, any>[];
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
      {stationData ? (
        <div>
          <StationBanner stationBannerData={stationData} />
          <h1 className="text-white font-bold text-5xl m-8">STATION DETAILS</h1>
          <StationFacilityContainer stationDetails={stationData} />
          <StationGateContainer stationGateData={stationData} />
          <StationLiftContainer stationLiftData={stationData} />
          <StationServicesContainer stationServicesData={stationData} />
          <ParkingContainer stationParkingData={stationData} />
          <StationPlatformContainer stationPlatformData={stationData} />
          <EmergencyCardContainer stationCardData={stationData} />
        </div>
      ) : (
        <p className="text-white">Loading station details...</p>
      )}
    </div>
  );
};

export default StationInfo;
