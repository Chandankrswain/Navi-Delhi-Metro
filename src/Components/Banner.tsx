import BannerCard from "./BannerCard";
import BannerText from "./BannerText";
import Metro from "../images/metro-Banner.png";

const Banner = () => {
  return (
    <>
      <img
        className="hidden sm:block sm:absolute  w-full h-full object-cover z-[-10] max-h-screen blur-lg"
        src={Metro}
        alt="Metro"
      />
      <div className="flex flex-col flex-col-reverse sm:flex-row p-3 w-full  justify-center justify-between sm:justify-evenly items-center h-full ">
        <BannerCard />
        <BannerText />
      </div>
    </>
  );
};

export default Banner;
