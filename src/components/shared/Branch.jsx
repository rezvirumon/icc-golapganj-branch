import { FaLocationArrow, FaMobile } from "react-icons/fa";

const Branch = () => {
    return (
        <div className="ml-4">
            <div className="mb-4 md:mb-0">
                <h3 className="flex items-center gap-2 font-semibold">
                    <span className="font-bold">Golapganj Branch,</span> Birganj, Dinajpur
                    <FaLocationArrow className="animate-bounce text-green-400"></FaLocationArrow>
                </h3>
                <p className="flex items-center gap-2"><span className="font-bold">Contact</span> <span className="font-semibold"> +88 09639185472</span> 
               
                </p>
            </div>
        </div>
    );
};

export default Branch;