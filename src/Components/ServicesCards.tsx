import { HiArrowUpRight } from "react-icons/hi2";
import dollar from "../images/card1.png";
import guide from "../images/card2.png";
import museum from "../images/card3.png";
import lost from "../images/card4.png";
import advisory from "../images/card5.png";
import tickets from "../images/card6.png";
import lastmile from "../images/card7.png";
import carbonlite from "../images/card8.png";

const ServicesCards = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-t border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0 pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div className="flex justify-between">
          <img className="w-14 h-14" src={dollar} alt="" />
          <button className="text-white text-[11px] bg-black w-11 h-6 mr-4">
            NOTE
          </button>
        </div>
        <p className="text-white text-[20px] font-medium ">Fare Calculator</p>
        <p className="text-[15px] text-[#c4c4c4] h-[75px] font-light">
          The Fare Calculator is a quick and easy tool to help you estimate your
          travel costs.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          FARECAL.AI
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between border-t border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0 pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={guide} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium ">Tour Guide</p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          A Tour Guide offers a personalized and informative experience, helping
          you explore new places with ease.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          TOURGUIDE.COM
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between border-t border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0 pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={museum} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium">Metro Museum</p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          The Metro Museum offers a fascinating glimpse into the history and
          evolution of urban transit.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          MUSEUM.AI.IO
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between border-t border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0 pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={lost} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium">Lost and Found</p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          The Metro Lost and Found service is dedicated to reuniting passengers
          with their lost belongings.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          LOSTANDFOUND.IN
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0  pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={advisory} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium">Travel Advisory</p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          A Travel Advisory provides essential information to ensure a safe and
          smooth journey.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          ADVISORY.AI
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0  pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={tickets} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium">Tickets</p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          Metro tickets are your gateway to a convenient and efficient transit
          experience.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          TICKET.IN
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0 pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div>
          <img className="w-14 h-14" src={lastmile} alt="" />
        </div>
        <p className="text-white text-[20px] font-medium">
          Last Mile Connectivity
        </p>
        <p className="text-[15px] text-[#c4c4c4] h-[75px] font-light">
          Last Mile Connectivity bridges metro stations to your destination with
          ease.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          LASTMILE.COM
        </p>
      </div>
      <div className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-b border-[#7a7a7a] pl-5 pr-5 sm:pl-0 sm:pr-0  pt-5 pb-5">
        <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
        <div className="flex justify-between">
          <img className="w-14 h-14" src={carbonlite} alt="" />
          <button className="text-white text-[11px] bg-black w-11 h-6 mr-4">
            NEW
          </button>
        </div>
        <p className="text-white text-[20px] font-medium">
          CarbonLite Metro Travel
        </p>
        <p className=" text-[15px] text-[#c4c4c4] h-[75px] font-light">
          CarbonLite Metro Travel promotes eco-friendly transit by reducing
          carbon emissions through energy-efficient metro systems.
        </p>
        <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
          CARBON.LITE.IO
        </p>
      </div>
    </div>
  );
};

export default ServicesCards;
