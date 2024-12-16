import { useEffect, useState } from "react";
import { TourismData } from "../utils/api";

interface TourismType {
  name: string;
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
      <h1>Tourism Guide</h1>
      {tourismData.length > 0 ? (
        tourismData.map((item, index) => <p key={index}>{item.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TourGuide;
