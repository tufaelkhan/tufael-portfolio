import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";

const Main = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;