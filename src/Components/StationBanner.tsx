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
  const navigate = useNavigate();

  console.log(stationBannerData?.station_name);
  const lineName = stationBannerData?.metro_lines?.[0]?.name;

  const prevNextStation =
    stationBannerData?.prev_next_stations?.[0]?.[lineName];

  console.log("prevNextStation:", prevNextStation);

  const prevHandleClick = () => {
    navigate(`/station-data/${prevNextStation?.prev_station?.station_code}`);
  };

  const nextHandleClick = () => {
    navigate(`/station-data/${prevNextStation?.next_station?.station_code}`);
  };

  const prevStation =
    prevNextStation?.prev_station?.station_name || "No Previous Station";
  const nextStation =
    prevNextStation?.next_station?.station_name || "No Next Station";

  return (
    <div className=" flex justify-between items-center w-full h-[300px] bg-blue-600 ">
      <button onClick={prevHandleClick}>{prevStation}</button>
      <div className="text-center align-middle">
        {stationBannerData?.station_name}
      </div>
      <button onClick={nextHandleClick}>{nextStation}</button>
    </div>
  );
};

export default StationBanner;
