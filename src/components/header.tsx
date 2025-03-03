import  { useState } from "react";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-b-lg py-4 flex items-center justify-between relative">
      {/* Profile Section */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/40" // Replace with real profile image
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold text-black">Thorn Thavann</span>
      </div>

      {/* Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-black text-xl">
        ☰
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-15 p-2 text-left  bg-gray-400 shadow-lg rounded-lg w-[100%] ">
          <ul className="space-y-1">
            <li onClick={() => navigate("/workoutplan")} className="p-2 hover:bg-gray-200 text-black cursor-pointer">Workout Plan</li>
            <li onClick={() => navigate("/")} className="p-2 hover:bg-gray-200 text-black cursor-pointer">Home page</li>
            <li onClick={() => navigate("/promotion")} className="p-2 hover:bg-gray-200 text-black cursor-pointer">Promotion page</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
