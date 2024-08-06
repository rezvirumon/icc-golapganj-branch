import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/resource/ICC-Logo.png";
import Branch from "./Branch";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);

            clearTimeout(timer);
            setTimer(setTimeout(() => {
                setIsHidden(false);
            }, 150));
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, [lastScrollY, timer]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} ${isHidden ? "-top-16" : "top-0"}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="w-24">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <div className="lg:block hidden">
                            <Branch></Branch>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                        <div className="relative">
                            <button onClick={toggleDropdown} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                                Customer Corner
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
                                    <Link to="https://iccfios.net/icc-form/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IP Telephony Registration</Link>
                                    <Link to="https://portal.iccbd.com/customer/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Portal</Link>
                                    <Link to="https://billing.iccbd.com/index.jsp" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resellers</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/packages" className="text-gray-800 hover:text-gray-600">Packages</Link>
                        <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
                    </div>
                    <div className="hidden md:block space-x-6">
                        <Link to="https://www.icc.com.bd/" className="text-green-800 hover:text-green-600">ICC-Website</Link>
                        <a href="http://10.16.100.244/" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">FTP Server</span>
                        </a>
                        <a href="#" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Pay Now</span>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                        <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
                        <Link to="/packages" className="text-gray-800 hover:text-gray-600">Packages</Link>
                        <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
                        <Link to="https://iccfios.net/icc-form/" className="text-gray-800 hover:text-gray-600">IP Telephony Registration</Link>
                        <Link to="https://portal.iccbd.com/customer/login" className="text-gray-800 hover:text-gray-600">Portal</Link>
                        <Link to="https://billing.iccbd.com/index.jsp" className="text-gray-800 hover:text-gray-600">Resellers</Link>
                        <Link to="https://www.icc.com.bd/" className="text-green-800 hover:text-green-600">ICC-Website</Link>

                        <a href="http://10.16.100.244/" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">FTP Server</span>
                        </a>
                        <a href="#" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Pay Now</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
