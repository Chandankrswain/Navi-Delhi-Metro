import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TicketsCardData } from "../utils/api"; // Ensure this is the correct import for your data fetching function.
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface TicketsData {
  title: string;
  content: string;
  page_slug: string;
}

const TicketsPages = () => {
  const [ticketsCardData, setTicketsCardData] = useState<TicketsData[] | null>(
    null
  ); // Initially set to null to handle loading state properly
  const { pageSlug } = useParams<{ pageSlug: string }>();

  // Fetch data based on the pageSlug
  const fetchTicketCardData = async (slug: string) => {
    const ticketData = new TicketsCardData();
    const ticketCardResult = await ticketData.getTicketsCardData(slug);
    setTicketsCardData(ticketCardResult);
  };

  useEffect(() => {
    if (pageSlug) {
      fetchTicketCardData(pageSlug);
    }
  }, [pageSlug]);

  // Check if ticketsCardData is available before rendering
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {ticketsCardData && ticketsCardData.length > 0 ? (
            <>
              <h1
                dangerouslySetInnerHTML={{ __html: ticketsCardData[0].title }}
                className="text-3xl font-bold text-green-400 text-center mb-8"
              ></h1>
              <div className="space-y-8">
                {ticketsCardData.map((item, index) => (
                  <div
                    key={index}
                    className="disclaimer-content ticket-content bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-lg text-gray-400">Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TicketsPages;
