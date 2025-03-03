import { Outlet } from "react-router-dom";
// import Header from "../pages/Header";
// import MembershipInfo from "./Membership-Info";

const Layout = () => {
  return (
    <div>
      <Outlet />
      {/* <Header />
      <MembershipInfo /> */}
    </div>
  );
};

export default Layout;
