import LostFoundCard from "../Components/LostFoundCard";

const LostFoundData = [
  {
    id: 0,
    heading: "Instructions to collect lost articles",
    firstPoint:
      "Visit customer care centre of nearby station within 48 hours. After 48 hours, contact Lost & Found office as mentioned below.",
    secondPoint:
      "Photocopy of any ID proof (having address) along with original is mandatory to collect articles.",
    thirdPoint:
      "If the lost articles are not claimed within one month (for DMRC) and one year (for Rapid Metro), DMRC may dispose off the deposited articles.",
  },
  {
    id: 1,
    heading: "DMRC",
    content:
      "Lost & Found office Concourse level, below platform no. 03 Kashmere Gate Metro Station Contact Number- Mobile - 8527405555 Land line - 011-23417910, Extn: 113701Office timing -08:00 AM - 08:00 PM (Except on Sunday, all National and Gazetted Holidays)",
  },
  {
    id: 2,
    heading: "Rapid Metro",
    content:
      "Please contact:Rapid Metro Operation control center, Moulsari Avenue Road, DLF Phase 3, Pilllar number 146 Gurgaon- 122001 Warehouse timing -08:30 AM to 05:00 PM (Except on Sunday, all National and Gazetted Holidays) For more information:Write to us at care@rapidmetrogurgaon.in Centralized call centre on 0124-2800028",
  },
];

const LostFound = () => {
  return (
    <div>
      <LostFoundCard lostFoundCardData={LostFoundData} />
    </div>
  );
};

export default LostFound;
