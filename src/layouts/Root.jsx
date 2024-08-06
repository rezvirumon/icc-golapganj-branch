import { Outlet } from "react-router-dom";
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
