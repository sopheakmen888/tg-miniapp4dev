import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const menuItems = [
    { name: "Home page", path: "/" },
    { name: "Branch", path: "/branches" },
    { name: "Membership plan", path: "/membershipPlan" },
    { name: "Membership info", path: "/membership-info" },
    { name: "Promotions", path: "/promotion" },
    { name: "Workout plan", path: "/workout" },
  ];
  
  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-200 bg-green-800 p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-colors duration-200"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      
      {/* Dropdown Menu with improved styling */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-gradient-to-br from-teal-800 to-teal-600 text-white rounded-md shadow-lg w-56 z-20 overflow-hidden border border-green-700 opacity-90 ">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false); // Close menu after clicking
                }}
                className="block w-full text-left px-4 py-3 hover:bg-green-700 transition-colors duration-150 border-b border-green-700 last:border-b-0 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;