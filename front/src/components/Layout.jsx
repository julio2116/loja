import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <div className="bg-[#A3A3A325] px-[17px]">
                <Header />
                <Outlet />
            </div>
            <div className="bg-[#A3A3A335] px-[17px]">
                <Footer />
            </div>
        </>
    );
};
export default Layout;
