import { Outlet } from "react-router-dom";
import Navbar from '../components/shared/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
