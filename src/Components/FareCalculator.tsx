import { useEffect, useState } from "react";
import { FareCalculatorData } from "../utils/api";

interface DataState {
  fromSearchField?: string;
  toSearchField?: string;
  focusField?: string;
  fromStation?: Record<string, any>;
  toStation?: Record<string, any>;
}

const FareCalculator = () => {
  const [fareData, setFareData] = useState([]);
  const [filter, setFilter] = useState("shortest");
  const [dataField, setDataField] = useState<DataState>({
    fromSearchField: "",
    toSearchField: "",
    focusField: "",
    fromStation: undefined,
    toStation: undefined,
  });

  const handleFilter = (value: any) => {
    if (value === "shortest") {
      setFilter("shortest-route");
    } else {
      setFilter("minimum-interchange");
    }
  };

  const handleSubmit = () => {
    useEffect(() => {
      const FareData = new FareCalculatorData();
      const FetchData = async (fromStation: any, toStation: any, type: any) => {
        const fareResult = await FareData.getTotalFare(
          fromStation,
          toStation,
          type
        );
        setFareData(fareResult);
        console.log(fareResult);
      };
      FetchData("RN", "MN", "minimum-interchange");
    }, []);
  };

  console.log(fareData);
  return (
    <div className=" w-full h-auto p-4 text-white shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-semibold mb-3">
            From
          </label>
          <input
            id="from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full bg-[#131313] border h-[50px] p-2 mt-1 "
            placeholder="Enter starting location"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-semibold mb-3">
            To
          </label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-[#131313] border h-[50px] p-2 mt-1 "
            placeholder="Enter destination"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-semibold mb-3">
            Route Preference
          </label>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="shortest"
                name="routePreference"
                value="shortest"
                checked={filter === "shortest"}
                onChange={() => handleFilter("shortest")}
                className="mr-2"
              />
              <label htmlFor="shortest" className="text-sm">
                Shortest Distance
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="minimum"
                name="routePreference"
                value="minimum"
                checked={filter === "minimum"}
                onChange={() => handleFilter("minimum")}
                className="mr-2"
              />
              <label htmlFor="minimum" className="text-sm">
                Minimum Interchange
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-[50px] bg-[#131313] font-['Share_Tech_Mono'] border text-white py-2 rounded mt-4 hover:bg-gray-700"
          onSubmit={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FareCalculator;
