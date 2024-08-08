import BannerCard from './BannerCard';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import BannerText from './BannerText';

const GOOGLE_MAP_KEY = import.meta.env.REACT_APP_GOOGLE_MAP_KEY;

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 28.6448, // default latitude
  lng: 77.216721, // default longitude
};

const Banner = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_KEY,
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

  console.log('key', GOOGLE_MAP_KEY);
  return (
    <>
      <div className='flex w-full absolute justify-center justify-evenly items-center h-screen '>
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
    </>
  );
};

export default Banner;
