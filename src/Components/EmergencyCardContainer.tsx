import { useMemo } from "react";
import StationInfoPageCards from "./StationInfoPageCards";

interface StationCardType {
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
    <div className="flex flex-col items-center ">
      <p className="text-gray-400 text-[40px] mb-4 mt-2 ">Emergency</p>
      <StationInfoPageCards Emergency={EmergencyContainerData} />
    </div>
  );
};

export default EmergencyCardContainer;
