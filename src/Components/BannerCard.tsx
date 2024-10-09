import React, { useState } from "react";
import {
  HiArrowUpRight,
  HiOutlineArrowsUpDown,
  HiOutlineBolt,
  HiOutlineMap,
} from "react-icons/hi2";

interface Props {
  search: Function; // Search function that fetches stations
  stations: Record<string, any>[]; // Station data to be shown
  setStations: Function; // Function to update the stations state
}

interface DataState {
  fromSearchField?: string;
  toSearchField?: string;
  focusField?: string;
}

const BannerCard = ({ search, stations, setStations }: Props) => {
  const [dataField, setDataField] = useState<DataState>({
    fromSearchField: "",
    toSearchField: "",
    focusField: "",
  });

  console.log(dataField);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: any } = e.target;

    if (value === "") {
      setStations([]); // Clear stations if input is empty
      setDataField((prev) => ({ ...prev, [name]: value })); // Clear the corresponding input
    } else {
      setDataField((prev) => ({ ...prev, [name]: value })); // Update the corresponding input value
    }

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

  return (
    <div>
      <div className="sm:w-[500px] text-white flex flex-col justify-evenly min-w-[342px] mt-3">
        <div className="flex items-center">
          <p className="text-3xl sm:text-5xl font-bold">Plan your journey</p>
        </div>

        {/* FROM Station */}
        <p className="mt-3 text-md">From</p>
        <div className="flex flex-col items-center justify-between relative">
          <input
            className="border border-white bg-transparent w-full h-[60px] border-1 p-4 text-lg mt-4"
            placeholder="Enter the Departure Station"
            name="fromSearchField" // Set name to distinguish
            value={dataField?.fromSearchField}
            onChange={inputHandler}
            onFocus={() => {
              inputHandler({
                target: { name: "focusField", value: "from" },
              } as any);
              setStations([]);
            }}
          />
          {/* Show suggestions only when 'from' input is focused */}
          {dataField?.focusField === "from" && stations?.length > 0 && (
            <ul className="bg-gray-900 w-full mt-20 absolute z-10">
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

        {/* TO Station */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-md">To</p>
          <HiOutlineArrowsUpDown className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center justify-between relative">
          <input
            className="border border-white bg-transparent w-full h-[60px] rounded-0 border-1 p-4 text-lg mt-4"
            placeholder="Enter the Arrival Station"
            name="toSearchField" // Set name to distinguish
            value={dataField.toSearchField}
            onChange={inputHandler}
            onFocus={() => {
              inputHandler({
                target: { name: "focusField", value: "to" },
              } as any);
              setStations([]);
            }}
          />
          {/* Show suggestions only when 'to' input is focused */}
          {dataField?.focusField === "to" && stations.length > 0 && (
            <ul className="bg-gray-900 w-full mt-20 absolute z-10">
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

        <p className="text-xl font-bold mt-4">Advanced Filter</p>
        <div className="flex w-full h-[200px] mt-4 justify-between">
          <div className="flex flex-col w-full justify-center justify-between items-start bg-[#2a2a2a] border-gray-500 p-4">
            <div className="flex justify-between items-center w-full">
              <HiOutlineBolt className="w-10 h-10" />
              <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            </div>
            <p className="text-md font-thin ">Shortest route</p>
          </div>
          <div className="flex flex-col w-full justify-center justify-between bg-[#424242] items-start p-4">
            <div className="flex justify-between items-center w-full">
              <HiOutlineMap className="w-10 h-10" />
              <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            </div>
            <p className="text-md font-thin">Minimum Interchange</p>
          </div>
        </div>
      </div>
      <button className="mt-5 w-1/2 sm:w-full h-16 sm:h-16 text-white text-mds sm:text-md border font-['Share_Tech_Mono'] font-thin flex justify-center items-center">
        SHOW ROUTE AND FARE
        <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4 mr-2 " />
      </button>
    </div>
  );
};

export default BannerCard;
