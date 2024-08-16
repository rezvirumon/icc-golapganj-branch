import React from "react";
import icctheme from "../../assets/resource/ICC-Logo.png";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative">
                <img
                    src={icctheme}
                    alt="ICC Theme"
                    className="w-64 z-50 animate-pulse p-3 "
                />

            </div>
        </div>
    );
};

export default Loader;
