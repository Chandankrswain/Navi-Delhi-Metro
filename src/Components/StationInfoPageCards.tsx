interface CardInfoData {
  [key: string]: any;
}
interface Props {
  Emergency?: CardInfoData;
}

const StationInfoPageCards = ({ Emergency }: Props) => {
  const HospitalResponse = Emergency?.Hospital || [];
  const FireStationResponse = Emergency?.["Fire Station"] || [];
  const PoliceStationResponse = Emergency?.["Police Station"] || [];

  return (
    <div className="text-white">
      <div className="w-full mb-4">
        <h2 className="text-lg font-bold text-center">Hospitals</h2>
        <div className="flex flex-wrap justify-center">
          {HospitalResponse.length > 1
            ? HospitalResponse.slice(1).map((item: any, index: number) => (
                <div key={index} className="p-4 bg-blue-900 m-2 rounded w-64">
                  <h3 className="text-lg font-semibold">
                    {item?.name || "Unnamed Hospital"}
                  </h3>
                  <p className="text-sm">
                    {item?.distance_from_metro + " km" ||
                      "Distance not available"}
                  </p>
                  <p className="text-sm">
                    {item?.estimated_walking_time_min + " Min(s)" ||
                      "Walking info not available"}
                  </p>
                </div>
              ))
            : "NO HOSPITAL IS NEARBY "}
        </div>
      </div>

      <div className="w-full mb-4">
        <h2 className="text-lg font-bold text-center">Fire Stations</h2>
        <div className="flex flex-wrap justify-center ">
          {FireStationResponse.length > 1
            ? FireStationResponse.slice(1).map((item: any, index: number) => (
                <div key={index} className="p-4 bg-red-900 m-2 rounded w-64">
                  <h3 className="text-lg font-semibold">
                    {item?.name || "Unnamed Fire Station"}
                  </h3>
                  <p className="text-sm">
                    {item?.distance_from_metro + " km" ||
                      "Address not available"}
                  </p>
                  <p className="text-sm">
                    {item?.estimated_walking_time_min + " Min(s)" ||
                      "Contact info not available"}
                  </p>
                </div>
              ))
            : "NO FIRE STATION IS NEARBY"}
        </div>
      </div>

      <div className="w-full mb-4">
        <h2 className="text-lg font-bold text-center">Police Stations</h2>
        <div className="flex flex-wrap justify-center">
          {PoliceStationResponse.slice(1).map((item: any, index: number) => (
            <div key={index} className="p-4 bg-green-900 m-2 rounded w-64">
              <h3 className="text-lg font-semibold">
                {item?.name || "Unnamed Police Station"}
              </h3>
              <p className="text-sm">
                {item?.address || "Address not available"}
              </p>
              <p className="text-sm">
                {item?.contact || "Contact info not available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationInfoPageCards;
