import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TicketsCards from "../Components/TicketsCards";

const Data = {
  ticketing: {
    automatic_ticketing: {
      title: "Automatic Ticketing",
      description: "Contactless Automatic Fare Collection system",
      links: [{ text: "Fare", url: "/fare" }],
    },
    ticket_types: [
      {
        title: "Smart Card",
        description: "For frequent travel.",
        link: { text: "View More", url: "/smart-card" },
      },
      {
        title: "Tourist Card",
        description:
          "For unlimited travel in DMRC network except Airport Express Line.",
        link: { text: "View More", url: "/tourist-card" },
      },
      {
        title: "National Common Mobility Card (NCMC)",
        link: { text: "View More", url: "/national-common-mobility-card" },
      },
      {
        title: "QR Code based ticketing",
        description: "App based QR- Ticketing and Paper QR- Ticketing",
        links: [
          { text: "App based QR- Ticketing", url: "/app-based-qr-ticketing" },
          { text: "Paper QR- Ticketing", url: "/paper-qr-ticketing" },
        ],
      },
      {
        title: "QR based Ticketing for travel on Airport line",
        link: {
          text: "View More",
          url: "/qr-based-ticketing-for-travel-on-airport-line",
        },
      },
      {
        title: "Multiple Journey QR Ticket",
        link: { text: "View More", url: "/digital-smart-card" },
      },
    ],
  },
};

const Tickets = () => {
  return (
    <>
      <Navbar />
      <div>
        <TicketsCards ticketData={Data} />
      </div>
      <Footer />
    </>
  );
};

export default Tickets;
