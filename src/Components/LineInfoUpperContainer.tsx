import LineUpperBanner from "./LinePageBanner";

interface LineInfoType {
  data?: Record<string, any>[];
  line_color?: string;
  name?: string;
  status?: string;
  distance?: number;
  fare?: number;
  junction?: number;
  first_station?: Record<string, any>;
  last_station?: Record<string, any>;
}

interface Props {
  lineData?: LineInfoType[];
}
const LineInfoUpperContainer = ({ lineData = [] }: Props) => {
  return (
    <div>
      <LineUpperBanner lineUpperData={lineData} />
    </div>
  );
};

export default LineInfoUpperContainer;
