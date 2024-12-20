import { HiArrowUpRight } from "react-icons/hi2";
import FareCalculator from "./FareCalculator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StationData } from "../utils/api";

const ServicesCards = ({ servicesData }: any) => {
  const navigate = useNavigate();
  const [showFareCalculator, setShowFareCalculator] = useState(false);
  const [stations, setStations] = useState([]);
  const stationData = new StationData();
  async function searchStations(value: any) {
    if (value) {
      const result = await stationData.searchStations(value);
      setStations(result);
    }
  }

  const actions: { [key: number]: () => void } = {
    0: () => setShowFareCalculator(true),
    1: () => navigate("/tourGuide"),
    2: () => navigate("/metroMeseum"),
    3: () => navigate("/lostAndFound"),
    4: () => navigate("/travelAdvisory"),
    5: () => navigate("/tickets"),
    6: () => navigate("/lastMileConnectivity"),
    7: () => navigate("/carbonLiteMetro"),
  };

  const handleClick = (id: number) => {
    actions[id]();
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-between">
        {servicesData.map((data: any, index: number) => (
          <div
            key={index}
            className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between border-t border-b border-[#7a7a7a] pl-8 pr-8 sm:pl-0 sm:pr-0 pt-5 pb-5"
          >
            <HiArrowUpRight
              onClick={() => handleClick(data.id)}
              className="text-white w-8 h-7 ml-auto cursor-pointer"
            />
            <div className="flex justify-between">
              <img className="w-14 h-14" src={data.image} alt={data.title} />
              {(data.id === 0 || data.id === 7) && (
                <button className="text-white text-[11px] bg-black w-11 h-6 mr-4">
                  {data.id === 0 ? "NOTE" : "NEW"}
                </button>
              )}
            </div>
            <p className="text-white text-[20px] font-medium">{data.title}</p>
            <p className="text-[15px] text-[#c4c4c4] h-[75px] font-light">
              {data.description}
            </p>
            <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
              {data.link}
            </p>
          </div>
        ))}
      </div>

      {showFareCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-[#131313] h-[400px] p-5  w-full max-w-md ">
            <button
              onClick={() => setShowFareCalculator(false)}
              className="absolute top-3 right-3 text-xl font-bold text-white "
            >
              &times;
            </button>

            <FareCalculator
              search={searchStations}
              stations={stations}
              setStations={setStations}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCards;
