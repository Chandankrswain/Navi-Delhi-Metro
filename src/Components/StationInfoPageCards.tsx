interface CardInfoData {
  [key: string]: any;
}
interface Props {
  Emergency?: CardInfoData;
}

const StationInfoPageCards = ({ Emergency }: Props) => {
  const HospitalResponse = Emergency?.Hospital;

  const FireStationesponse = Emergency?.["Fire Station"]
    ? Emergency?.["Fire Station"]
    : [];
  const PoliceStationResponse = Emergency?.["Police Station"]
    ? Emergency?.["Police Station"]
    : [];

  const consolidatedResponse = [
    ...HospitalResponse,
    ...FireStationesponse,
    ...PoliceStationResponse,
  ];
  console.log(consolidatedResponse);

  return (
    <div className="text-white">
      <div className=" flex flex-col justify-between items-center w-[300px] h-[300px] bg-red-900 border-white"></div>
    </div>
  );
};

export default StationInfoPageCards;
