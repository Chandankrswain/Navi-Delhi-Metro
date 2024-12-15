import { useEffect, useState } from "react";
import { StationData } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { IMAGE_CDM } from "../services/constants";

interface MetroLine {
  name: string;
  line_color: string;
  status: string;
  start_station: string;
  end_station: string;
}

interface StationFacility {
  name: string;
  image: {
    file: string;
  };
}

interface CardDataType {
  station_code: string;
  metro_lines: MetroLine[];
  station_facility: StationFacility[];
  station_name: string;
}

interface LineStationCardProps {
  stationCode: string | null;
}

const LineStationCard = ({ stationCode }: LineStationCardProps) => {
  const [lineCardData, setLineCardData] = useState<CardDataType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stationCode) return;

    const lineStationCardData = new StationData();
    const FetchLineStationCardData = async () => {
      try {
        const lineStationData =
          await lineStationCardData.getLineStationCardInfo(stationCode);
        setLineCardData(lineStationData);
      } catch (error) {
        console.error("Error fetching line station card data:", error);
      }
    };

    FetchLineStationCardData();
  }, [stationCode]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      {lineCardData ? (
        <>
          <h3 className="text-2xl font-bold mb-4">
            {lineCardData.station_name}
          </h3>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Metro Lines</h4>
            {lineCardData.metro_lines.map((line, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-700 rounded mb-2"
              >
                <span className="font-medium">{line.name}</span>
                <span
                  className="px-2 py-1 rounded"
                  style={{ backgroundColor: line.line_color }}
                >
                  {line.line_color}
                </span>
                <span className="text-sm">{line.status}</span>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Station Facilities</h4>
            {lineCardData.station_facility.map((facility, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-700 rounded p-2 mb-2"
              >
                <img
                  src={
                    facility?.image?.file
                      ? IMAGE_CDM + facility?.image?.file
                      : undefined
                  }
                  className="w-12 h-12 rounded mr-4 bg-white w-10 h-10 p-2"
                />
                <span>{facility.name}</span>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold">Start & End Stations</h4>
            <p>
              <strong>Start:</strong>{" "}
              {lineCardData.metro_lines[0].start_station}
            </p>
            <p>
              <strong>End:</strong> {lineCardData.metro_lines[0].end_station}
            </p>
          </div>

          <button
            onClick={() =>
              navigate(`/station-data/${lineCardData.station_code}`)
            }
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-medium"
          >
            View Station Info
          </button>
        </>
      ) : (
        <div>Loading station details...</div>
      )}
    </div>
  );
};

export default LineStationCard;
