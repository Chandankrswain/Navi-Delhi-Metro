const CardGroup = () => {
  return (
    <div className="flex m-4 justify-evenly items-center mx-auto max-w-6xl">
      <div className=" flex flex-col justify-between bg-red-900 w-[30%] h-[180px] rounded-2xl p-4 ">
        <p className="text-white text-8xl font-bold ">393</p>
        <p className="text-white text-xl ml-1">Total Network length</p>
      </div>
      <div className="flex flex-col justify-between bg-red-900 w-[30%] h-[180px] rounded-2xl p-4  ">
        <p className="text-white text-8xl font-bold ">12 </p>
        <p className="text-white text-xl ml-2">Total no of lines</p>
      </div>
      <div className="flex flex-col justify-between bg-red-900 w-[30%] h-[180px] rounded-2xl p-4 ">
        <p className="text-white text-8xl font-bold ">288 </p>
        <p className="text-white text-xl ml-2">Total no of stations</p>
      </div>
    </div>
  );
};

export default CardGroup;