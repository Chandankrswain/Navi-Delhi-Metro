import DelhiMetroLogo from "../images/logo.png";

const KnowYourStation = () => {
  return (
    <div className="flex flex-col bg-green-700 w-[500px] h-[170px] rounded-xl p-4 justify-between">
      <div className="flex items-center">
        <img className="w-8 h-7 justify-start" src={DelhiMetroLogo} />
        <p className="ml-2">Know Your Station</p>
      </div>
      <input
        className="rounded-md h-10 p-3"
        placeholder="Enter Your Station Name "
      />
      <button className=" p-2 pl-3 pr-3 bg-red-800 rounded-md text-white self-end ">
        Advanced Search
      </button>
    </div>
  );
};

export default KnowYourStation;
