import PlatformCard from "./PlatformCard";

interface CardData {
  platform_name?: string;
  train_towards?: {
    id: number;
    station_name: string;
    station_code: string;
  };
  train_towards_second?: {
    id: number;
    station_name: string;
    station_code: string;
  };
}

interface PlatformsData {
  platforms?: CardData[]; // Updated to match the structure of the response
}

interface Props {
  stationPlatformData: PlatformsData;
}

const StationPlatformContainer = ({ stationPlatformData }: Props) => {
  const platformData = stationPlatformData?.platforms || []; // Ensure we always have an array

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">PLATFORMS</h2>
      <div className="grid grid-cols-1 gap-4">
        {platformData.map((platform, index) => (
          <PlatformCard key={index} data={platform} />
        ))}
      </div>
    </div>
  );
};

export default StationPlatformContainer;
