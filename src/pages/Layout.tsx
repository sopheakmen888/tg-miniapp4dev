import { Outlet } from "react-router-dom";
import Menu from "../components/menu"

const Layout = () => {
  return (
    <div 
    className="flex justify-center items-center gap-2 max-w-[500px] relative shadow-lg transition-transform hover:scale-102"
    >
     <Menu/>
      <Outlet />

    </div>
  );
};

export default Layout;
