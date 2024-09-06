import { LuCopyright } from "react-icons/lu";
import { FaApple, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const FooterSocial = () => {
  return (
    <div className="flex bg-black w-full h-[140px] sm:h-[100px] justify-center items-center">
      <div className="flex flex-col sm:flex-row sm:w-9/12 text-white sm:justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <LuCopyright />
          <p>2024.All rights are reserved</p>
        </div>

        <div className="flex text-white justify-between w-[120px] items-center text-[14px] sm:text-[16px] mb-2 sm:mb-0">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="flex w-[300px] h-[80] mb-5 sm:mb-0">
          <FaFacebookF className="w-10 h-10 border m-2 p-2" />
          <FaInstagram className="w-10 h-10 border m-2 p-2" />
          <FaXTwitter className="w-10 h-10 border m-2 p-2" />
          <FaApple className="w-10 h-10 border m-2 p-2" />
          <IoLogoGooglePlaystore className="w-10 h-10 border m-2 p-2" />
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
