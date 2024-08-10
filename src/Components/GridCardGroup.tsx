const GridCardGroup = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 col-span-3 gap-3 m-6  place-items-center">
      <div className="bg-red-900 w-[70%] h-[300px] rounded-2xl p-4 ">
        <p className="text-white text-9xl font-bold ">393</p>
        <p className="text-white">Total</p>
        <p className="text-white">Network length</p>
      </div>
      <div className="bg-red-900 w-[70%] h-[300px] rounded-2xl p-4 ">
        <p className="text-white text-9xl font-bold ">12 </p>
        <p className="text-white">Total</p>
        <p className="text-white"> no of lines</p>
      </div>
      <div className="bg-red-900 w-[70%] h-[300px] rounded-2xl p-4 ">
        <p className="text-white text-9xl font-bold ">288 </p>
        <p className="text-white">Total</p>
        <p className="text-white">no of stations</p>
        <p>testing</p>
      </div>
    </div>
  );
};

export default GridCardGroup;
