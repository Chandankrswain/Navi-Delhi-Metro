import { useEffect, useState } from "react";
import { FareCalculatorData } from "../utils/api";

interface Props {
  search: Function; // Search function that fetches stations
  stations: Record<string, any>[]; // Station data to be shown
  setStations: Function; // Function to update the stations state
}
interface DataState {
  fromSearchField?: string;
  toSearchField?: string;
  focusField?: string;
  fromStation?: Record<string, any>;
  toStation?: Record<string, any>;
}

const FareCalculator = ({ search, setStations, stations }: Props) => {
  const [fareData, setFareData] = useState({} as any);
  const [filter, setFilter] = useState("");
  const [dataField, setDataField] = useState<DataState>({
    fromSearchField: "",
    toSearchField: "",
    focusField: "",
    fromStation: undefined,
    toStation: undefined,
  });

  const handleFilter = (routePreference: any) => {
    setFilter(routePreference);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: any } = e.target;

    // for handling empty input
    if (value === "") {
      setStations([]); // Clear stations if input is empty
      setDataField((prev) => ({ ...prev, [name]: value })); // Clear the corresponding input
    } else {
      setDataField((prev) => ({ ...prev, [name]: value })); // Update the corresponding input value
    }

    // when a user toggle between fields
    if (["fromSearchField", "toSearchField"].includes(name)) {
      if (dataField.focusField === "from") {
        setDataField((prev) => ({
          ...prev,
          fromStation: undefined,
        }));
      } else if (dataField.focusField === "to") {
        setDataField((prev) => ({
          ...prev,
          toStation: undefined,
        }));
      }
      search(value);
    }

    // when a user select the station
    if (name == "fromStation") {
      setDataField((prev) => ({
        ...prev,
        fromSearchField: value.station_name,
      }));
      setStations([]);
    }
    if (name == "toStation") {
      setDataField((prev) => ({
        ...prev,
        toSearchField: value.station_name,
      }));
      setStations([]);
    }
  };

  const handleSubmit = async () => {
    if (dataField?.fromStation && dataField?.toStation && filter) {
      const FareData = new FareCalculatorData();
      const fareResult = await FareData.getTotalFare(
        dataField?.fromStation?.station_code,
        dataField?.toStation?.station_code,
        filter
      );
      setFareData(fareResult);
    } else {
      alert("select valid input ");
    }
  };

  return (
    <div className=" w-full h-full p-4 text-white shadow-md">
      <div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-semibold mb-3">
            From
          </label>
          <input
            autoComplete="off"
            name="fromSearchField"
            value={dataField.fromSearchField}
            onChange={inputHandler}
            onFocus={() =>
              inputHandler({
                target: { name: "focusField", value: "from" },
              } as any)
            }
            className="w-full bg-[#131313] border h-[45px] p-2 mt-1 "
            placeholder="Enter starting location"
          />
          {dataField?.focusField === "from" && stations.length > 0 && (
            <ul className="bg-gray-900 w-[82%] absolute z-10">
              {stations.map((data: any) => (
                <li
                  className="cursor-pointer p-2 hover:bg-gray-700"
                  key={data.id}
                  onClick={() =>
                    inputHandler({
                      target: { name: "fromStation", value: data },
                    } as any)
                  }
                >
                  {data.station_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-semibold mb-3">
            To
          </label>
          <input
            autoComplete="off"
            name="toSearchField"
            value={dataField?.toSearchField}
            onChange={inputHandler}
            onFocus={() =>
              inputHandler({
                target: { name: "focusField", value: "to" },
              } as any)
            }
            className="w-full bg-[#131313] border h-[45px] p-2 mt-1 "
            placeholder="Enter destination"
          />
          {dataField?.focusField === "to" && stations.length > 0 && (
            <ul className="bg-gray-900 w-[82%] absolute z-10">
              {stations.map((data: any) => (
                <li
                  className="cursor-pointer p-2 hover:bg-gray-700"
                  key={data.id}
                  onClick={() =>
                    inputHandler({
                      target: { name: "toStation", value: data },
                    } as any)
                  }
                >
                  {data.station_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-md font-semibold mb-3">
            Route Preference
          </label>
          <div className="flex justify-evenly space-x-4">
            <div>
              <input
                type="radio"
                id="shortest"
                name="routePreference"
                value="least-distance"
                checked={filter === "least-distance"}
                onChange={() => handleFilter("least-distance")}
                className="mr-2"
              />
              <label htmlFor="shortest" className="text-sm font-light">
                Shortest Distance
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="minimum"
                name="routePreference"
                value="minimum-interchange"
                checked={filter === "minimum-interchange"}
                onChange={() => handleFilter("minimum-interchange")}
                className="mr-2 "
              />
              <label htmlFor="minimum" className="text-sm font-light">
                Minimum Interchange
              </label>
            </div>
          </div>
          <div className="flex justify-evenly w-full text-sm font-light mt-4">
            <p className="text-[#00FFFF] font-['Share_Tech_Mono'] ">
              NORMAL FARE &#8377;{fareData?.weekday_fare}
            </p>
            <p className="text-[#00FFFF] font-['Share_Tech_Mono']">
              SPECIAL FARE &#8377;{fareData?.weekend_fare}
            </p>
          </div>

          <button
            className="w-full h-[40px] bg-[#131313] font-['Share_Tech_Mono'] border text-white py-2 rounded mt-4 hover:bg-gray-700"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FareCalculator;
