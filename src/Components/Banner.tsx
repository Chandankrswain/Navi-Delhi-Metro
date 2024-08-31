import BannerCard from "./BannerCard";
import BannerText from "./BannerText";
import Metro from "../images/metro-Banner.png";
import NoticesAlerts from "./NoticesAlerts";

const Banner = () => {
  return (
    <div className="mb-[3rem] sm:mb-[8rem] ">
      <img
        className="hidden sm:block sm:absolute  w-full h-full object-cover z-[-10] max-h-screen blur-lg"
        src={Metro}
        alt="Metro"
      />
      <div className="flex flex-col flex-col-reverse sm:flex-row p-3 w-full  justify-center justify-between sm:justify-evenly items-center h-full sm:mt-9">
        <BannerCard />
        <BannerText />
      </div>
    </div>
  );
};

export default Banner;
