import { FiWifi } from "react-icons/fi";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="">
                
                <FiWifi className="text-green-600 text-6xl animate-pulse delay-600" />

            </div>
        </div>
    );
};

export default Loader;
