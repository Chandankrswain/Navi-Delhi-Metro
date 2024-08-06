import BannerCard from "./BannerCard";
import scrollTest from "../images/delhi-metro.png";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BannerText from "./BannerText";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 28.6448, // default latitude
  lng: 77.216721, // default longitude
};

const Banner = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmerPEpk5lCXZlINyO80Jf3FBtSlGUlQ4",
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const defaultMapOptions = {
    fullscreenControl: false,
  };

  return (
    <>
      <div className="flex w-full absolute justify-center justify-evenly items-center h-screen ">
        <BannerCard />
        <BannerText />
      </div>

      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
          options={defaultMapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
      <img src={scrollTest} />
      <img src={scrollTest} />
    </>
  );
};

export default Banner;
