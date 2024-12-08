import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface StationBannerType {
  line_id: number;
  metro_lines?: Record<string, any>[];
  prev_next_stations?: Record<string, any>[];
  station_name: string;
  station_code: string;
}

interface Props {
  stationBannerData?: StationBannerType;
}

const StationBanner = ({ stationBannerData }: Props) => {
  const [currentStation, setCurrentStation] = useState<string>("");
  const navigate = useNavigate();

  const lineName = stationBannerData?.metro_lines?.[0]?.name;

  const prevNextStation = stationBannerData?.prev_next_stations?.[0]?.[
    lineName
  ]?.find(
    (station: any) =>
      station?.prev_station?.station_name || station?.next_station?.station_name
  );

  const prevHandleClick = () => {
    const prevStationCode = prevNextStation?.prev_station?.station_code;
    if (prevStationCode) {
      navigate(`/station-data/${prevStationCode}`);
    }
  };

  const nextHandleClick = () => {
    const nextStationCode = prevNextStation?.next_station?.station_code;
    if (nextStationCode) {
      navigate(`/station-data/${nextStationCode}`);
    }
  };

  const prevStation =
    prevNextStation?.prev_station?.station_name || "No Previous Station";

  const nextStation =
    prevNextStation?.next_station?.station_name || "No Next Station";

  useEffect(() => {
    if (stationBannerData?.station_name) {
      setCurrentStation(stationBannerData.station_name);
    }
  }, [stationBannerData]);

  return (
    <div className="flex justify-between items-center w-full h-[300px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <button
        onClick={prevHandleClick}
        className=" w-[200px] px-4 py-2 h-full bg-[#424242] transition-all ease-in-out duration-300 text-white text-sm font-semibold"
      >
        {prevStation}
      </button>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{currentStation}</h1>
        <p className="text-lg italic text-gray-200">
          {lineName || "Line Information Not Available"}
        </p>
      </div>
      <button
        onClick={nextHandleClick}
        className=" w-[200px] px-4 py-2 h-full bg-[#424242] transition-all ease-in-out duration-300 text-white text-sm font-semibold"
      >
        {nextStation}
      </button>
    </div>
  );
};

export default StationBanner;
