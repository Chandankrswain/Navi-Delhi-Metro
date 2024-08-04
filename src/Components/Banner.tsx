
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <>
      <BannerCard />
      <video
        className="w-full h-full bg-cover "
        src={"../../public/assets/Delhivid.mp4"}
        autoPlay
        loop
        muted
      />
    </>
  );
};

export default Banner;
