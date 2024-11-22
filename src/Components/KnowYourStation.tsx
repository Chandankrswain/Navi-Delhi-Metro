import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

interface Props {
  search: Function; // Search function that fetches stations
  stations: Record<string, any>[]; // Station data to be shown
  setStations: Function; // Function to update the stations state
}

interface DataState {
  searchStationField: string;
  searchFocusField: string;
  searchStationData?: Record<string, any>[];
}  

const KnowYourStation = ({ search, stations, setStations }: Props) => {
  const [dataField, setDataField] = useState<DataState>({
    searchStationField: "",
    searchFocusField: "",
    searchStationData: undefined,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: any } = e.target;

    if (value === "") {
      setStations([]); // Clear stations if input is empty
      setDataField((prev: any) => ({ ...prev, [name]: value })); // Clear the corresponding input
    } else {
      setDataField((prev: any) => ({ ...prev, [name]: value })); // Update the corresponding input value
    }

    if (["searchStation"].includes(name)) {
      if (dataField.searchFocusField === "search") {
        setDataField((prev: any) => ({
          ...prev,
          fromStation: undefined,
        }));
      }
      search(value);
    }

    if (name == "seachYourStation") {
      setDataField((prev: any) => ({
        ...prev,
        fromSearchField: value.station_name,
      }));
      setStations([]);
    }
  };

  return (
    <div className="w-full sm:max-w-[50%] flex flex-col items-start">
      <p className="pl-9 sm:pl-0 text-white text-2xl sm:text-[92px] font-extrabold leading-none mb-4">
        KNOW YOUR STATION.
      </p>
      <p className="text-[#c9c9c9] font-light text-[20px] w-full pl-12 pr-9 text-justify mb-7 leading-snug">
        Get an inside look at your station, where music, community, and culture
        come together. Meet our team, explore the station, and see why we’re the
        station you love.
      </p>
      <div className="flex mt-3 w-full mb-5 pl-12 ">
        <div>
          <input
            name="searchStation"
            className="border border-white border-r-0 bg-transparent w-[70%] h-[72px] p-4 text-lg font-thin text-white focus:outline-none focus:border-white"
            placeholder="Search Metro Station"
            onFocus={() => {
              inputHandler({
                target: { name: "searchFocusField", value: "search" },
              } as any);
              setStations([]);
            }}
          />
          {dataField?.searchFocusField === "search" && stations?.length > 0 && (
            <ul className="bg-gray-900 w-full mt-20 absolute z-10">
              {stations.map((data: any) => (
                <li
                  className="cursor-pointer p-2 hover:bg-gray-700"
                  key={data.id}
                  onClick={() =>
                    inputHandler({
                      target: { name: "searchYourStation", value: data },
                    } as any)
                  }
                >
                  {data.station_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="border border-white border-l-0 w-[10%] h-[72px] flex items-center justify-center">
          <HiArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
      <div className="flex mt-3 w-full mb-9 pl-12 ">
        <button className="border-t border-[#7a7a7a] w-[75%] h-[72px] text-[#00FFFF] font-['Share_Tech_Mono'] p-2 sm:p-0">
          YOUR JOURNEY WITH INTERCATIVE AND CLICKABLE MAP
        </button>
        <button className="border-t border-[#7a7a7a] w-[10%] h-[72px] flex items-center justify-center">
          <HiArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default KnowYourStation;
