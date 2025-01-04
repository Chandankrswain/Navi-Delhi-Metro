interface Tickets {
  ticketing: {
    automatic_ticketing: {
      title: string;
      description: string;
      links: { text: string; url: string }[];
    };
    ticket_types: {
      title: string;
      description?: string;
      link?: { text: string; url: string };
      links?: { text: string; url: string }[];
    }[];
  };
}

interface Props {
  ticketData: Tickets;
}

const TicketsCards = ({ ticketData }: Props) => {
  const ticketTypes = ticketData.ticketing.ticket_types;
  const automaticTicketing = ticketData.ticketing.automatic_ticketing;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      <div className="  mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          {automaticTicketing.title}
        </h1>
        <p className="text-gray-300 mb-6">{automaticTicketing.description}</p>
        <div className="flex justify-center gap-4">
          {automaticTicketing.links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {ticketTypes.map((ticket, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              {ticket.title || "Untitled"}
            </h2>
            <p className="text-gray-300 mb-6">
              {ticket.description || "No description available."}
            </p>
            {ticket.link ? (
              <a
                href={ticket.link.url}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                {ticket.link.text}
              </a>
            ) : ticket.links ? (
              <div className="flex flex-wrap gap-2">
                {ticket.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            ) : (
              <span className="text-gray-400">No links available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsCards;
