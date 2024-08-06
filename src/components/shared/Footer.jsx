import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">ICC Communication Ltd.</h2>
                    <p className="text-gray-400 hover:text-green-500 transition-all ease-in-out">Golapganj Bazar, Birganj, Dinajpur</p>
                    <p className="text-gray-400 hover:text-green-500 transition-all ease-in-out">Email: support@icc-communication.com</p>
                    <p className="text-gray-400 hover:text-green-500 transition-all ease-in-out">Branch: +880 09639185472</p>
                    <p className="text-gray-400 hover:text-green-500 transition-all ease-in-out">Support: +880 09639123123</p>
                </div>

                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="https://facebook.com/icccommunication" aria-label="Facebook">
                        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="https://github.com/icccommunication" aria-label="GitHub">
                        <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                    </a>
                    <a href="https://linkedin.com/company/icccommunication" aria-label="LinkedIn">
                        <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
                    </a>
                    <a href="https://whatsapp.com" aria-label="WhatsApp">
                        <FaWhatsapp className="text-2xl hover:text-green-500 transition-colors" />
                    </a>
                </div>

                <div className="text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} ICC Communication Ltd. Golapganj All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
