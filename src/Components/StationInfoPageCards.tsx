interface StationCardType {
  station_name: string;
  id: number;
  nearby_places: Record<string, any>[];
}

interface Props {
  stationCardData?: StationCardType;
}

const StationInfoPageCards = ({ stationCardData }: Props) => {
  const emergencyData =
    stationCardData?.nearby_places?.[0]?.Emergency?.Hospital?.[1]?.name;

  return (
    <div className="text-white">
      <div className=" flex flex-col justify-between items-center w-[300px] h-[300px] bg-red-900 border-white">
        <img className="w-20 h-20 m-6" src="/public/images/logo.png" />
        <p>Kalra Hospital</p>
        <div>
          <div className="flex justify-evenly">
            <p>Icon</p>
            <p>Distance </p>
          </div>
          <div className="flex justify-evenly">
            <p>Icon</p>
            <p>Walking Time </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationInfoPageCards;
