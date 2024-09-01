import { HiArrowUpRight } from "react-icons/hi2";

const KnowYourStation = () => {
  return (
    <div className="w-full sm:max-w-[50%] flex flex-col items-start">
      <p className="pl-9 sm:pl-0 text-white text-2xl sm:text-[92px] font-extrabold leading-none mb-4">
        KNOW YOUR STATION.
      </p>
      <p className="text-[#c9c9c9] font-light text-[20px] w-full pl-12 pr-9 text-justify mb-7 leading-snug">
        Get an inside look at your station, where music, community, and culture
        come together. Meet our team, explore the station, and see why we’re the
        station you love.
      </p>
      <div className="flex mt-3 w-full mb-5 pl-12 ">
        <input
          className="border border-white border-r-0 bg-transparent w-[70%] h-[72px] p-4 text-lg font-thin text-white focus:outline-none focus:border-white"
          placeholder="Search Metro Station"
        />
        <button className="border border-white border-l-0 w-[10%] h-[72px] flex items-center justify-center">
          <HiArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
      <div className="flex mt-3 w-full mb-9 pl-12 ">
        <button className="border-t border-[#7a7a7a] w-[75%] h-[72px] text-[#00FFFF] font-['Share_Tech_Mono'] p-2 sm:p-0">
          YOUR JOURNEY WITH INTERCATIVE AND CLICKABLE MAP
        </button>
        <button className="border-t border-[#7a7a7a] w-[10%] h-[72px] flex items-center justify-center">
          <HiArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default KnowYourStation;
