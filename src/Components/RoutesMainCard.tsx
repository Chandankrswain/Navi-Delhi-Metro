import RouteCard from "./RouteCard";

const RoutesMainCard = ({ data }: { data: any }) => {
  if (!data) return <div>No data available</div>;

  console.log(data);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Route Information</h2>
      <div>
        <p>From: {data.from}</p>
        <p>To: {data.to}</p>
        <p>Total Time: {data.total_time}</p>
        <p>Fare: Rs. {data.fare}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Route Details</h3>
        <RouteCard data={data} />
      </div>
    </div>
  );
};

export default RoutesMainCard;
