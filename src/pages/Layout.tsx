import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import both Menu and X icons from lucide-react
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet for navigation
import logo from "../assets/logo.png"; // Import logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-md p-6 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Hamburger or Cancel Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="text-purple-900 w-8 h-8" /> // Show X (Cancel) icon when menu is open
          ) : (
            <Menu className="text-purple-900 w-8 h-8" /> // Show Menu (Hamburger) icon when menu is closed
          )}
        </button>

        {/* Logo */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img src={logo} alt="Gym Logo" width={50} height={50} />
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-16 w-full bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/membership" // Update the route
                className="block text-purple-900 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                to="/promotion" // Update the route
                className="block text-purple-900 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking
              >
                Promotion
              </Link>
            </li>
            <li>
              <Link
                to="/branch" // Update the route
                className="block text-purple-900 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking
              >
                Branch
              </Link>
            </li>
            <li>
              <Link
                to="/workout-plan" // Update the route
                className="block text-purple-900 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking
              >
                Workout Plan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Layout = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      <Header />
      <Outlet /> {/* This will render the content for the matched route */}
    </div>
  );
};

export default Layout;
