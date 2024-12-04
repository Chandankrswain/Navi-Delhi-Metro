import { IMAGE_CDM } from "../services/constants";

interface StationDetailsType {
  station_facility: Record<string, any>[];
}

interface Props {
  stationDetails?: StationDetailsType;
}

const StationFacilityContainer = (stationDetails: Props) => {
  const Facility = stationDetails?.stationDetails?.station_facility || [];
  console.log(Facility);
  return (
    <div className="text-white flex justify-center justify-between m-6">
      {Facility?.map((item: any, index: number) => (
        <div key={index} className="flex items-center">
          <img
            className="text-white bg-white rounded-xl p-3"
            src={item?.image?.file ? IMAGE_CDM + item?.image?.file : undefined}
          />
          <p className="ml-4">{item?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StationFacilityContainer;
