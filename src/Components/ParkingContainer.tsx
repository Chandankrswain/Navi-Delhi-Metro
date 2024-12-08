interface ParkingData {
  parkings?: Record<string, any>[];
}

interface Props {
  stationParkingData?: ParkingData;
}

const ParkingContainer = ({ stationParkingData }: Props) => {
  const data = stationParkingData?.parkings?.[0];
  console.log(data);
  return (
    <div className="text-white bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Parking Capacity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <p className="text-base">{data?.provider || "N/A"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-yellow-400">Motorcycle</p>
          <p className="text-base">{data?.capacity_motorcycle || "0"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-yellow-400">Cycle</p>
          <p className="text-base">{data?.capacity_cycle || "0"}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-yellow-400">Car</p>
          <p className="text-base">{data?.capacity_car || "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default ParkingContainer;
