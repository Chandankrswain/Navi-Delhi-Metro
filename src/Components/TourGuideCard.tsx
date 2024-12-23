import { TourismType } from "../pages/TourGuide";
import { IMAGE_CDM } from "../services/constants";

interface Props {
  tourGuide: TourismType[];
}

const TourGuideCard = ({ tourGuide }: Props) => {
  return (
    <>
      <h1 className="text-8xl mb-8">TOUR GUIDE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tourGuide.length > 0 ? (
          tourGuide.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 bg-gray-800 text-white"
            >
              <img
                src={
                  item.photograph_mapping.file
                    ? IMAGE_CDM + item.photograph_mapping.file
                    : "/placeholder.jpg"
                }
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm text-gray-300">
                Nearest Metro Station: {item.station.station_name}
              </p>
              <p className="text-sm text-gray-300">
                Distance from Metro: {item.distance_from_metro} km
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-400">Loading...</p>
        )}
      </div>
    </>
  );
};

export default TourGuideCard;
