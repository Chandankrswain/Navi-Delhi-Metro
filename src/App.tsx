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
    image: "/images/dollar.png",
    title: "Fare Calculator",
    description:
      "The Fare Calculator is a quick and easy tool to help you estimate your travel costs.",
    link: "FARECAL.AI",
  },
  {
    id: 1,
    image: "/images/guide.png",
    title: "Tour Guide",
    description:
      "A Tour Guide offers a personalized and informative experience, helping you explore new places with ease.",
    link: "TOURGUIDE.COM",
  },
  {
    id: 2,
    image: "/images/museum.png",
    title: "Metro Museum",
    description:
      "The Metro Museum offers a fascinating glimpse into the history and evolution of urban transit.",
    link: "MUSEUM.AI.IO",
  },
  {
    id: 3,
    image: "/images/lostfound.png",
    title: "Lost and Found",
    description:
      "The Metro Lost and Found service is dedicated to reuniting passengers with their lost belongings.",
    link: "LOSTANDFOUND.IN",
  },
  {
    id: 4,
    image: "/images/advisory.png",
    title: "Travel Advisory",
    description:
      "A Travel Advisory provides essential information to ensure a safe and smooth journey.",
    link: "ADVISORY.AI",
  },
  {
    id: 5,
    image: "/images/tickets.png",
    title: "Tickets",
    description:
      "Metro tickets are your gateway to a convenient and efficient transit experience.",
    link: "TICKET.IN",
  },
  {
    id: 6,
    image: "/images/lastmile.png",
    title: "Last Mile Connectivity",
    description:
      "Last Mile Connectivity bridges metro stations to your destination with ease.",
    link: "LASTMILE.COM",
  },
  {
    id: 7,
    image: "/images/eco.png",
    title: "CarbonLite Metro Travel",
    description:
      "CarbonLite Metro Travel promotes eco-friendly transit by reducing carbon emissions through energy-efficient metro systems.",
    link: "CARBON.LITE.IO",
  },
];

const cardTextData = [
  {
    backgroundImage: "/images/red.png",
    line: "LINE 1",
    colour: "Red Line",
  },
  {
    backgroundImage: "/images/yellow.png",
    line: "LINE 2",
    colour: "Yellow Line",
  },
  {
    backgroundImage: "/images/blue.png",
    line: "LINE 3",
    colour: "Blue Line 1",
  },
  {
    backgroundImage: "/images/blue.png",
    line: "LINE 4",
    colour: "Blue Line 2",
  },
  {
    backgroundImage: "/images/green.png",
    line: "LINE 5",
    colour: "Green Line 1",
  },
  {
    backgroundImage: "/images/green.png",
    line: "LINE 6",
    colour: "Green Line 2",
  },
  {
    backgroundImage: "/images/voilet.png",
    line: "LINE 7",
    colour: "Violet Line",
  },
  {
    backgroundImage: "/images/pink.png",
    line: "LINE 8",
    colour: "Pink Line",
  },
  {
    backgroundImage: "/images/magenta.png",
    line: "LINE 9",
    colour: "Magenta Line",
  },
  {
    backgroundImage: "/images/grey.png",
    line: "LINE 10",
    colour: "Grey Line",
  },
  {
    backgroundImage: "/images/orange.png",
    line: "LINE 11",
    colour: "Orange Line",
  },
  {
    backgroundImage: "/images/rapid.png",
    line: "LINE 12",
    colour: "Rapid Metro RMGL",
  },
];

const noticesTextData = [
  {
    date: "28-8-2024",
    news: "DMRC launches special drive to prevent unlawful entry of male passengers in ladies coaches",
  },
  {
    date: "23-8-2024",
    news: "Timing for commnecement of sunday services on Phase-III corridors revised",
  },
  {
    date: "21-8-2024",
    news: "DMRC Completes Major Tunneling Milestone on Phase 4 Golden Line Breakthrough at Chhatarpur Mandir Station",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NoticesAlerts noticeData={noticesTextData} />
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
