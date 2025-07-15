import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div style={{ padding: "0 17px", backgroundColor: "#A3A3A325" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
