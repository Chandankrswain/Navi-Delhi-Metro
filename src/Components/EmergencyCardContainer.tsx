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
    const emergencyObj = stationCardData?.nearby_places?.find((item) =>
      item.hasOwnProperty("Emergency")
    );

    const { Emergency } = emergencyObj || {};

    return Emergency;
  }, [stationCardData]);

  return (
    <div>
      <StationInfoPageCards Emergency={EmergencyContainerData} />
    </div>
  );
};

export default EmergencyCardContainer;
