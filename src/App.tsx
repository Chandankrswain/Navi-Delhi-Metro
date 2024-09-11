import Banner from "./Components/Banner";
import CardGroup from "./Components/CardGroup";
import Disclaimer from "./Components/Disclaimer";
import Footer from "./Components/Footer";
import FooterSocial from "./Components/FooterSocial";
import KnowYourStation from "./Components/KnowYourStation";
import MetroCards from "./Components/MetroCards";
import Navbar from "./Components/Navbar";
import NoticesAlerts from "./Components/NoticesAlerts";
import ServicesCards from "./Components/ServicesCards";

const bannerTextData = [
  { number: "393", description: "TOTAL NETWORK LENGTH  " },
  { number: "12", description: "TOTAL NUMBER OF LINES" },
  { number: "288", description: "TOTAL NUMBER OF STATIONS  " },
  { number: "2002", description: "YEAR FOUNDED" },
];

const ourServicesData = [
  {
    id: 0,
    image: "/src/images/dollar.png",
    title: "Fare Calculator",
    description:
      "  The Fare Calculator is a quick and easy tool to help you estimate your travel costs.",
    link: "FARECAL.AI",
  },
  {
    id: 1,
    image: "/src/images/guide.png",
    title: "Tour Guide",
    description:
      "   A Tour Guide offers a personalized and informative experience, helping you explore new places with ease.",
    link: "TOURGUIDE.COM ",
  },
  {
    id: 2,
    image: "/src/images/museum.png",
    title: "Metro Museumr",
    description:
      " The Metro Museum offers a fascinating glimpse into the history and evolution of urban transit.",
    link: "MUSEUM.AI.IO",
  },

  {
    id: 3,
    image: "/src/images/lostfound.png",
    title: "Lost and Found",
    description:
      " The Metro Lost and Found service is dedicated to reuniting passengers with their lost belongings.",
    link: "LOSTANDFOUND.IN",
  },
  {
    id: 4,
    image: "/src/images/advisory.png",
    title: "Travel Advisory",
    description:
      "  A Travel Advisory provides essential information to ensure a safe and smooth journey.",
    link: "ADVISORY.AI",
  },
  {
    id: 5,
    image: "/src/images/tickets.png",
    title: "Tickets",
    description:
      "Metro tickets are your gateway to a convenient and efficient transit experience.",
    link: "TICKET.IN",
  },
  {
    id: 6,
    image: "/src/images/lastmile.png",
    title: "Last Mile Connectivity",
    description:
      "Last Mile Connectivity bridges metro stations to your destination with ease.",
    link: "LASTMILE.COM",
  },
  {
    id: 7,
    image: "/src/images/eco.png",
    title: "CarbonLite Metro Travel",
    description:
      "CarbonLite Metro Travel promotes eco-friendly transit by reducing carbon emissions through energy-efficient metro systems.",
    link: "CARBON.LITE.IO",
  },
];

const cardTextData = [
  {
    backgroundImage: "../src/images/red.png",
    line: "LINE 1",
    colour: "Red Line",
  },
  {
    backgroundImage: "../src/images/yellow.png",
    line: "LINE 2",
    colour: "Yellow Line",
  },
  {
    backgroundImage: "../src/images/blue.png",
    line: "LINE 3",
    colour: "Blue Line 1",
  },
  {
    backgroundImage: "../src/images/blue.png",
    line: "LINE 4",
    colour: "Blue Line 2",
  },
  {
    backgroundImage: "../src/images/green.png",
    line: "LINE 5",
    colour: "Green Line 1",
  },
  {
    backgroundImage: "../src/images/green.png",
    line: "LINE 6",
    colour: "Green Line 2",
  },
  {
    backgroundImage: "../src/images/voilet.png",
    line: "LINE 7",
    colour: "Voilet Line",
  },
  {
    backgroundImage: "../src/images/pink.png",
    line: "LINE 8",
    colour: "Pink Line",
  },
  {
    backgroundImage: "../src/images/magenta.png",
    line: "LINE 9",
    colour: "Magenta Line",
  },
  {
    backgroundImage: "../src/images/grey.png",
    line: "LINE 10",
    colour: "Grey Line",
  },
  {
    backgroundImage: "../src/images/orange.png",
    line: "LINE 11",
    colour: "Orange Line",
  },
  {
    backgroundImage: "../src/images/rapid.png",
    line: "LINE 12",
    colour: "Rapid Metro RMGL",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NoticesAlerts />
      <div className="flex w-full justify-center items-center mb-[14rem]">
        <div className="sm:flex sm:w-9/12">
          <KnowYourStation />
          <CardGroup bannerData={bannerTextData} />
        </div>
      </div>
      <div className="flex w-full justify-center items-center mb-[11rem]">
        <div className="flex flex-col sm:w-9/12 items-center justify-center">
          <p className="text-white text-[35px] sm:text-[96px] font-extrabold leading-none mb-20">
            OUR SERVICES.
          </p>
          <ServicesCards servicesData={ourServicesData} />
        </div>
      </div>
      <div className=" flex w-full  justify-center items-center mb-16">
        <div className="flex flex-col sm:w-9/12 items-center sm:items-start">
          <p className="text-white text-[14px] mb-3 font-['Share_Tech_Mono'] tracking-widest">
            TOTAL NUMBER OF
          </p>
          <p className="text-white text-[40px] sm:text-[96px] font-extrabold leading-none mb-20">
            METRO LINES.
          </p>
          <MetroCards cardData={cardTextData} />
        </div>
      </div>
      <Disclaimer />
      <Footer />
      <FooterSocial />
    </>
  );
};

export default App;
