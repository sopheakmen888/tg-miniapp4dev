import { useState } from "react";
import { Home, MapPin, Infinity, Percent, Gift, Grid, User } from "lucide-react";
import MenuItem from "./menuitem"; // Assuming MenuItem is a custom component

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div  >
      {/* Toggle Button */}
      <button
        className="absolute -left-1 text-white p-1 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "◀" : "▶"}
      </button>

      {/* Logo */}
      <h2
        className={`text-lg font-bold transition-all ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        Green
      </h2>
      <p
        className={`text-sm text-gray-500 transition-all ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        GMY
      </p>

      {/* Menu Items */}
      <nav className="mt-6 space-y-4">
        <MenuItem icon={Home} label="Home" to="/" isOpen={isOpen} />
        <MenuItem icon={MapPin} label="Branch" to="/branch" isOpen={isOpen} />
        <MenuItem icon={Infinity} label="Workout-Plan" to="/workout-plan" isOpen={isOpen} />
        <MenuItem icon={Percent} label="Promo" to="/promo" isOpen={isOpen} />
        <MenuItem icon={Gift} label="Coupon" to="/coupon" isOpen={isOpen} />
        <MenuItem icon={Grid} label="Workout" to="/workout" isOpen={isOpen} />
        <MenuItem icon={User} label="Info" to="/info" isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Sidebar;
