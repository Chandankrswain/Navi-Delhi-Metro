interface StationInfoType {
  station_name: string; // Station name is a string
  id: number; // ID is a number
}

interface Props {
  stationDetails: StationInfoType; // Props expect a single StationRequiredData object
}

const NearbyPlacesCard = ({ stationDetails }: Props) => {
  return (
    <div className="text-white">
      <p>ID: {stationDetails.id}</p>
      <p>Station Name: {stationDetails.station_name}</p>
    </div>
  );
};

export default NearbyPlacesCard;
