import AdvisoryCard from "../Components/AdvisoryCard";

const travelAdvisoryTextData = {
  do: [
    "Stand in Queue",
    "Give way for the Persons with Disabilities, Sr. Citizens, Ladies & Sick Persons",
    "Show your Token/Smart Card to DMRC Authorized Person",
    "For Assistance Contact Metro Security/Guard/Police Booth/Customer Care Centre",
    "Contact Station Control Room for drinking water",
    "Allow passenger to alight first",
    "Follow instruction of station staff",
    "Use passenger alarm button/handle in case any passenger/article stuck between train doors",
    "Stand away from doors to allow passenger to board the train",
    "Limit baggage to 25 kg (not exceeding 80 cm(l) x 50 cm(b) x 30 cm(h))",
    "Keep Clear off tactile path",
    "Take Care of your Valuables",
    "Check your destination from System Map",
    "Every entry by travel media should be followed by proper exit",
    "Mind the gap between platform and train doors",
    "Extra vigilant while travelling with children & infant",
    "Take care of your loose items like saree, dupatta, dhoti and bag etc. while boarding/alighting.",
  ],
  donts: [
    "Carry firearms",
    "Share Smart Card/Token with another person",
    "Use of Lift meant for Persons with Disabilities, Sr. Citizens and Sick Persons",
    "Jump over the AFC Gates",
    "Try to force open the train doors",
    "Do not try to enter/exit when train doors are closing.",
  ],
};

const TravelAdvisory = () => {
  return (
    <div>
      <AdvisoryCard advisoryData={travelAdvisoryTextData} />
    </div>
  );
};

export default TravelAdvisory;
