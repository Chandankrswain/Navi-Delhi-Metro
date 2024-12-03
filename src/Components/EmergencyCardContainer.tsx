import { useMemo } from "react";
import StationInfoPageCards from "./StationInfoPageCards";

interface StationCardType {
  station_name: string;
  id: number;
  nearby_places: Record<string, any>[];
}

interface Props {
  stationCardData?: StationCardType;
}

const EmergencyCardContainer = ({ stationCardData }: Props) => {
  const EmergencyContainerData = useMemo(() => {
    // Find the "Emergency" data directly
    return stationCardData?.nearby_places?.find((place) => place?.Emergency)
      ?.Emergency;
  }, [stationCardData]);

  return (
    <div>
      <StationInfoPageCards Emergency={EmergencyContainerData} />
    </div>
  );
};

export default EmergencyCardContainer;
