import { useEffect, useState } from "react";
import { TourismData } from "../utils/api";
import TourGuideCard from "../Components/TourGuideCard";

export interface TourismType {
  name: string;
  station: {
    station_name: string;
  };
  distance_from_metro: string;
  photograph_mapping: {
    file: string;
  };
}

const TourGuide = () => {
  const [tourismData, setTourismData] = useState<TourismType[]>([]);

  useEffect(() => {
    const fetchTourismDetails = async () => {
      try {
        const tourismResultData = new TourismData();
        const tourismResult = await tourismResultData.getTourism();
        setTourismData(tourismResult);
      } catch (error) {
        console.error("Error fetching tourism data:", error);
      }
    };

    fetchTourismDetails();
  }, []);

  return (
    <div className="text-white">
      <TourGuideCard tourGuide={tourismData} />
    </div>
  );
};

export default TourGuide;
