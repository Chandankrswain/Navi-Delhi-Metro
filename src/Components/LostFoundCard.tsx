import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface CardType {
  id: number;
  heading: string;
  firstPoint?: string;
  secondPoint?: string;
  thirdPoint?: string;
  content?: string;
}

interface Props {
  lostFoundCardData: CardType[];
}

const LostFoundCard = ({ lostFoundCardData }: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: any) => {
    if (id === 1) {
      navigate("/listoflostfounditems");
    } else {
      window.open(
        "https://backend.delhimetrorail.com/documents/6408/Lost__Found_Data_June-24.pdf"
      );
    }
  };
  return (
    <>
      <Navbar />
      <div className="text-white w-full min-h-[800px] flex flex-col justify-evenly gap-6 p-6 mb-20">
        {lostFoundCardData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full"
          >
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              {item.heading}
            </h2>
            {item.firstPoint && (
              <p className="mb-2 text-gray-300">{item.firstPoint}</p>
            )}
            {item.secondPoint && (
              <p className="mb-2 text-gray-300">{item.secondPoint}</p>
            )}
            {item.thirdPoint && (
              <p className="mb-2 text-gray-300">{item.thirdPoint}</p>
            )}
            {item.content && (
              <div>
                <p className="text-gray-300 mb-4">{item.content}</p>
                <button
                  onClick={() => handleClick(item?.id)}
                  className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default LostFoundCard;
