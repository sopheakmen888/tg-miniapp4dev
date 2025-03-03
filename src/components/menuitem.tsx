import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, to, isOpen }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2 text-white hover:bg-green-400 rounded-md transition"
    >
      <Icon className="w-6 h-6" />
      <span className={`ml-2 transition-all ${isOpen ? "block" : "hidden"}`}>
        {label}
      </span>
    </Link>
  );
};

export default MenuItem;
