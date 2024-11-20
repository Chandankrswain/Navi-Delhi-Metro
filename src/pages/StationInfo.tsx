import { useParams } from "react-router-dom";

const StationInfo = () => {
  const { stationCode } = useParams();
  console.log(stationCode);
  return <div>StationInfo</div>;
};

export default StationInfo;
