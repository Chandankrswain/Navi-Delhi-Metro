import { PiArrowsDownUpBold } from 'react-icons/pi';
import { FaShuffle, FaSquare } from 'react-icons/fa6';
import DelhiMetroLogo from '../images/logo.png';
import { FaRoute } from 'react-icons/fa';

const BannerCard = () => {
  return (
    <div className=' z-10'>
      <div className='bg-white w-[550px] h-[560px]  p-4 flex flex-col justify-evenly'>
        <div className='flex items-center'>
          <img className='w-8 h-7' src={DelhiMetroLogo} />
          <p className='ml-3 text-3xl font-bold'>Plan your journey</p>
        </div>
        <p className='mt-2 text-xl'>
          Click here to plan through{' '}
          <a className='text-gray' href='https://www.google.com'>
            Interactive map{' '}
          </a>
        </p>
        <p className='mt-1 text-xl'>From</p>
        <div className='flex items-center justify-between'>
          <input className='w-[95%] h-[60px] border-1 p-4 text-lg mt-2 border-red-900'></input>
          <FaSquare />
        </div>
        <div className='flex items-center justify-between mt-2'>
          <p className='text-xl'>To</p>
          <PiArrowsDownUpBold />
        </div>
        <div className='flex items-center  justify-between'>
          <input className='w-[95%] h-[60px] rounded-0 border-1 p-4 text-lg mt-2 border-red-900'></input>
          <FaSquare />
        </div>
        <p className='text-3xl'>Advanced Filter</p>
        <div className=' flex w-full h-[200px] mt-4 justify-between'>
          <div className='flex flex-col w-[48%] bg-green-600 justify-center items-center rounded-xl p-3'>
            <FaRoute className='w-24  h-24 m-4' />
            <p className='text-xl font-bold justify-center'>Shortest Route</p>
          </div>
          <div className='flex flex-col w-[48%] bg-blue-600 justify-center items-center rounded-xl p-3 '>
            <FaShuffle className='w-24  h-24 m-4' />
            <p className='text-xl font-bold'>Minimum interchange</p>
          </div>
        </div>
      </div>
      <button className='p-5 w-full z-10 bg-red-800 text-xl '>
        Show Route and Fare
      </button>
    </div>
  );
};

export default BannerCard;
