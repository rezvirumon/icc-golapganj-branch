import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/resource/ICC-Logo.png";
import Branch from "./Branch";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsHidden(currentScrollY > lastScrollY);
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [lastScrollY]);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login"); // Redirect to the login page after logout
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                } ${isHidden ? "-top-16" : "top-0"}`}
        >
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="w-24">
                            <img src={Logo} alt="Logo" className="object-contain" />
                        </NavLink>
                        <div className="lg:block hidden">
                            <Branch />
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink to="/" className="text-gray-800 hover:text-green-600">
                            Home
                        </NavLink>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-800 hover:text-green-600 focus:outline-none"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                Customer Corner
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
                                    <NavLink to="https://iccfios.net/icc-form/" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                        IP Telephony Registration
                                    </NavLink>
                                    <NavLink to="https://portal.iccbd.com/customer/login" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                        Portal
                                    </NavLink>
                                    <NavLink to="https://billing.iccbd.com/index.jsp" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                        Resellers
                                    </NavLink>
                                    <NavLink to="/customers" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                        Users Sections
                                    </NavLink>

                                </div>
                            )}
                        </div>
                        <NavLink to="/packages" className="text-gray-800 hover:text-green-600">
                            Packages
                        </NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:text-green-600">
                            Contact
                        </NavLink>
                    </div>
                    <div className="hidden items-center md:flex space-x-6">
                        {user ? (
                            <>
                                <button onClick={handleLogout} className="text-green-800 hover:text-green-600">
                                    Logout
                                </button>
                                <NavLink to="https://www.icc.com.bd/" className="text-green-800 hover:text-green-600">
                                    ICC-Website
                                </NavLink>
                                <a href="http://10.16.100.244/" className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">FTP Server</span>
                                </a>
                                <a href="#" className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">Pay Now</span>
                                </a>
                                <Link to='/connections-request-table' className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">Admin Panel</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="text-green-800 hover:text-green-600">
                                    Login
                                </NavLink>
                                <NavLink to="https://www.icc.com.bd/" className="text-green-800 hover:text-green-600">
                                    ICC-Website
                                </NavLink>
                              
                                <a href="http://10.16.100.244/" className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">FTP Server</span>
                                </a>
                                <a href="#" className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">Pay Now</span>
                                </a>
                                <Link to='/connections-request-table' className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                                    <span className="relative">Admin Panel</span>
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-green-600 focus:outline-none transition-transform duration-300"
                        >
                            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div ref={menuRef} className="md:hidden block bg-white shadow-lg rounded-lg">
                    <NavLink to="/" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                        Home
                    </NavLink>
                    <button onClick={toggleDropdown} className="block px-4 py-2 text-green-800 hover:bg-gray-100 ">
                        Customer Corner
                    </button>
                    {isDropdownOpen && (
                        <div className="bg-gray-100">
                            <NavLink to="https://iccfios.net/icc-form/" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                IP Telephony Registration
                            </NavLink>
                            <NavLink to="https://portal.iccbd.com/customer/login" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                Portal
                            </NavLink>
                            <NavLink to="https://billing.iccbd.com/index.jsp" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                Resellers
                            </NavLink>
                            <NavLink to="/customers" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                                Users Sections
                            </NavLink>
                            <NavLink to="/connections-request-table" className="lg:hidden btn btn-success flex">
                                Admin
                            </NavLink>

                        </div>
                    )}
                    <NavLink to="/packages" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                        Packages
                    </NavLink>
                    <NavLink to="/contact" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                        Contact
                    </NavLink>
                    <NavLink to="/contact" className="block px-4 py-2 text-green-800 hover:bg-gray-100">
                        FTP Server
                    </NavLink>
                    <div className="w-full py-5">
                        {user ? (
                            <>
                                <button onClick={handleLogout} className="text-red-800 btn w-full hover:text-red-600">
                                    Logout
                                </button>

                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="text-green-800 btn w-full hover:text-green-600">
                                    Login
                                </NavLink>

                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
