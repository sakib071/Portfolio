import { Outlet } from "react-router-dom";
// import Footer from "../components/footer/Footer";
// import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../providers/ThemeProvider";
import { useContext } from "react";
import SideNav from "../components/navbar/SideNav";
// import BackgroundFog from "../components/BackgroundFog/BackgroundFog";

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={` ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
            {/* <Navbar></Navbar>*/}
            {/* <BackgroundFog /> */}
            <div className="lg:flex lg:w-full">
                <SideNav></SideNav>
                <Outlet></Outlet>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;