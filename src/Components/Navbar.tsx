import logo from '../images/logo.png';
import delhimetro from '../images/delhi-metro.png';
import facebook from '../images/facebook logo.png';
import twitter from '../images/x logo.avif';

const Navbar = () => {
  return (
    <div className='bg-black w-full h-24 flex justify-between'>
      {/* Left section of Navbar */}
      <div className='flex w-[200px] items-center m-[20px]'>
        <img src={logo} className='w-18 h-16' />
        <img src={delhimetro} className='w-30 h-16' />
      </div>

      {/* Right section of Navbar */}
      <div className='flex'>
        <img src={facebook} className='w-10 h-10' />
        <img src={twitter} className='w-10 h-10' />
      </div>
    </div>
  );
};

export default Navbar;
