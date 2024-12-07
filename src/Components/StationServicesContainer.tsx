import StationServiceCard from "./StationServiceCard";

interface ServicesData {
  stations_facilities?: Record<string, any>[];
}

interface Props {
  stationServicesData?: ServicesData;
}

const StationServicesContainer = ({ stationServicesData }: Props) => {
  const servicesData = stationServicesData?.stations_facilities || [];

  return (
    <div>
      <StationServiceCard serviceData={servicesData} />
    </div>
  );
};

export default StationServicesContainer;
