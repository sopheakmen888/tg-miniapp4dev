import Menu from "../components/Menu";
import img from "../../public/images/image.png";
import { Bell } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto">
      {/* Main Card */}
      <div className="bg-white overflow-hidden flex flex-col w-full min-h-screen">
        {/* Hero Section with Background Elements */}
        <div className="relative px-6 pt-6 pb-4 flex-grow">
          {/* Background Circles - Keeping original positioning */}
          <div className="absolute top-0 left-0 w-66 h-66 bg-green-100 rounded-full -translate-x-1/4" />
          <div className="absolute top-0 right-0 w-35 h-35 bg-gray-200 rounded-full translate-x-1/4" />
          
          {/* Header with Menu */}
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h1 className="text-4xl bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent font-bold leading-tight">
                LET'S<br />
                WORK<br />
                OUT
              </h1>
              <p className=" font-extrabold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent mt-3 text-lg">Together</p>
            </div>
            {/* Use Menu Component Here */}
            <Menu />
          </div>

          {/* Illustration Section - Keeping original image styling */}
          <img src={img} alt="Workout illustration" className="mt-[8%]" />
        </div>

        {/* Call To Action Button - Alert on Click */}
        <div className="px-4 pb-4">
          <button
            onClick={() => alert("You have claimed your reward! 🎉")}
            className="bg-gradient-to-br from-teal-800 to-teal-600 text-white w-full py-3 rounded-md font-medium relative group"
          >
            <div className="flex items-center justify-center">
              <Bell className="h-5 w-5 mr-2" />
              <span>Claim Now !</span>
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              New!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


