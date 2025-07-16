import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="px-[17px] bg-[#A3A3A325]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
