const Disclaimer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-[18rem] sm:mb-[5rem]">
      <div className=" sm:w-9/12 h-[182px] p-9 sm:p-2 sm:overflow-hidden">
        <p className=" text-white text-[1.5rem] sm:text-[2rem] font-medium mb-6  ">
          Disclaimer
        </p>
        <div className="border-t border-b border-[#7a7a7a] pt-6 pb-6  ">
          <p className="text-[#c9c9c9] sm:text-md font-semibold sm:animate-marquee sm:whitespace-nowrap text-justify">
            The information provided in DMRC's website i.e. train timings,
            runtime, station facilities etc. is indicative and subject to
            change. Commuters are advised to plan their journey in advance as
            actual journey time may vary as per the prevailing conditions. DMRC
            will not be liable for any direct or indirect loss (of any nature
            whatsoever) arising from the material contained in this website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
