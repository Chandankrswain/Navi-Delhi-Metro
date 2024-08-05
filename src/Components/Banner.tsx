import BannerCard from "./BannerCard";
import scrollTest from "../images/delhi-metro.png";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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

  return (
    <>
      <BannerCard />
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
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
