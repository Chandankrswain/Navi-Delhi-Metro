const RouteCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
      {data.route.map((line: any, index: number) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h3>Line {index + 1}</h3>
          <p>
            <strong>Start Station:</strong> {line.start}
          </p>
          <p>
            <strong>End Station:</strong> {line.end}
          </p>

          <p>
            <strong>Towards Station:</strong> {line.towards_station}
          </p>
          <div>
            Path:
            <ul className="text-red-200">
              {line.path.map((station: any, i: number) => (
                <li key={i}>{station.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RouteCard;
