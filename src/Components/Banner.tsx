import { useState } from "react";
import BannerCard from "./BannerCard";
import BannerText from "./BannerText";
import Metro from "/images/metro-Banner.png";
import { StationData } from "../utils/api";

const Banner = () => {
  const [stations, setStations] = useState([]);
  const stationData = new StationData();
  async function searchStations(e: any) {
    if (e.target.value) {
      const result = await stationData.searchStations(e.target.value);
      setStations(result);
    }
  }

  return (
    <div className="mb-[1em] sm:mb-[8rem] ">
      <img
        className="hidden sm:block sm:absolute  w-full h-full object-cover z-[-10] max-h-screen blur-lg"
        src={Metro}
        alt="Metro"
      />
      <div className="flex flex-col flex-col-reverse sm:flex-row p-3 w-full  justify-center justify-between sm:justify-evenly items-center h-full sm:mt-9">
        <BannerCard
          search={searchStations}
          stations={stations}
          setStations={setStations}
        />
        <BannerText />
      </div>
    </div>
  );
};

export default Banner;
