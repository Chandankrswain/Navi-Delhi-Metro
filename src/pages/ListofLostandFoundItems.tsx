import { useEffect, useState } from "react";
import { LostAndFoundData } from "../utils/api";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

interface LostFoundDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    item_name: string;
    description: string;
    quantity: string;
    station: string;
    receiving_date: string;
    receiving_time: string;
  }[];
}

const ListofLostandFoundItems = () => {
  const [lostFoundData, setLostFoundData] = useState<LostFoundDataType | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState(1);

  const FetchLostFoundData = async (keyword: number) => {
    try {
      const getLostFoundData = new LostAndFoundData();
      const lostFoundResult = await getLostFoundData.getLostAndFound(keyword);
      setLostFoundData(lostFoundResult);
    } catch (error) {
      console.error("Failed to fetch lost and found data", error);
    }
  };

  useEffect(() => {
    FetchLostFoundData(pageNumber);
  }, [pageNumber]);

  return (
    <>
      <div className="text-white p-6">
        <p className="text-5xl mb-7">Lost & Found Items</p>

        {lostFoundData ? (
          <div className="overflow-x-auto mb-7">
            <table className="min-w-full table-auto rounded-lg bg-gray-800 shadow-xl">
              <thead>
                <tr className="text-yellow-400">
                  <th className="px-6 py-3 text-left font-semibold">
                    Item Name
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">Station</th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Receiving Date
                  </th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Receiving Time
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {lostFoundData.results.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-300"
                  >
                    <td className="px-6 py-4">{item.item_name}</td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.station}</td>
                    <td className="px-6 py-4">{item.receiving_date}</td>
                    <td className="px-6 py-4">{item.receiving_time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading lost and found items...</p>
        )}
        {lostFoundData && (
          <Pagination
            data={{ count: lostFoundData.count }}
            setPageNumber={setPageNumber}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ListofLostandFoundItems;
