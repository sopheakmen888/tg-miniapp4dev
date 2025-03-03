import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import pic_coupon from "../image/pic-coupon.png"

const Coupon = () => {
  return (
    <div className="bg-[#d3c4c4] flex justify-center items-center min-h-screen p-4">
      {/* Main Container */}
      <div className="flex w-[100%] max-w-md bg-black rounded-lg overflow-hidden shadow-md">
        
        {/* Left Section (Image) */}
        <div className="w-1/2 relative">
          <img
            src={pic_coupon}
            alt="Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-700 opacity-30 clip-triangle"></div>
        </div>

        {/* Right Section (Content) */}
        <div className="w-1/2 p-4 flex flex-col justify-center text-white text-sm">
          <h1 className="text-gray-400 text-xs">GET INTO</h1>
          <h1 className="text-green-500 text-lg font-bold">HULK GYM</h1>
          <p className="text-gray-300 mt-2 text-[8px]">
            The gym is not just a place to lift weights; it’s where you lift yourself up! 
            Every drop of sweat is a step closer to your goals.
          </p>

          {/* Join Us Button */}
          <button className="bg-green-500 text-black font-semibold py-1 px-3 rounded-md mt-3 text-xs hover:bg-green-600">
            Join us
          </button>

          {/* Social Icons */}
          <div className="flex mt-4 gap-1 text-[8px]">
            <div className="flex items-center gap-1">
              <FaFacebook className="text-blue-500 text-xs" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-1">
              <FaInstagram className="text-pink-500 text-xs" />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <FaTiktok className="text-white text-xs" />
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
