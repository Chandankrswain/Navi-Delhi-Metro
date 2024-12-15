import LineStationList from "./LineStationList";

interface LineInfoType {
  data?: Record<string, any>[];
  station_name?: string;
  status?: string;
}

interface Props {
  lineStationData?: LineInfoType[];
}
const LineInfoLowerContainer = ({ lineStationData }: Props) => {
  console.log(lineStationData);
  return (
    <div>
      <LineStationList stationListData={lineStationData} />
    </div>
  );
};

export default LineInfoLowerContainer;