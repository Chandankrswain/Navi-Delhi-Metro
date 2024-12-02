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
    <div className="flex justify-between items-center w-full h-[300px] bg-blue-600">
      <button onClick={prevHandleClick}>{prevStation}</button>
      <div className="text-center align-middle">{currentStation}</div>
      <button onClick={nextHandleClick}>{nextStation}</button>
    </div>
  );
};

export default StationBanner;
