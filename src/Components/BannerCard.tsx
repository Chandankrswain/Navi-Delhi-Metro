import React, { useCallback, useState } from "react";
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

const BannerCard = ({ search, stations, setStations }: Props) => {
  const [focusedField, setFocusedField] = useState(""); // Track which field is focused
  const [valueField, setValueField] = useState({ from: "", to: "" }); // Track input values for both fields
  // Handle input changes for both fields
  const inputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      if (value === "") {
        setStations([]); // Clear stations if input is empty
        setValueField((prev) => ({ ...prev, [name]: value })); // Clear the corresponding input
      } else {
        console.log("Input Value:", value); // Log the value
        search(e); // Call the search function
        setValueField((prev) => ({ ...prev, [name]: value })); // Update the corresponding input value
      }
    },
    [search]
  );

  // Handle click on suggestion item
  const handleClick = (station: any) => {
    console.log("Station Selected:", station); // Log selected station
    setStations([]); // Clear the suggestions
    setValueField((prev) => ({
      ...prev,
      [focusedField]: station.station_name,
    })); // Set selected station to the corresponding input field
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
            name="from" // Set name to distinguish
            value={valueField.from}
            onChange={inputHandler}
            onFocus={() => {
              setFocusedField("from"); // Set focused field to 'from'
              setStations([]); // Clear previous stations
            }}
          />
          {/* Show suggestions only when 'from' input is focused */}
          {focusedField === "from" && stations.length > 0 && (
            <ul className="bg-gray-900 w-full mt-20 absolute z-10">
              {stations.map((data: any) => (
                <li
                  className="cursor-pointer p-2 hover:bg-gray-700"
                  key={data.id}
                  onClick={() => handleClick(data)}
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
            name="to" // Set name to distinguish
            value={valueField.to}
            onChange={inputHandler}
            onFocus={() => {
              setFocusedField("to"); // Set focused field to 'to'
              setStations([]); // Clear previous stations
            }}
          />
          {/* Show suggestions only when 'to' input is focused */}
          {focusedField === "to" && stations.length > 0 && (
            <ul className="bg-gray-900 w-full mt-20 absolute z-10">
              {stations.map((data: any) => (
                <li
                  className="cursor-pointer p-2 hover:bg-gray-700"
                  key={data.id}
                  onClick={() => handleClick(data)}
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
            <p className="text-md font-thin">u5</p>
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
