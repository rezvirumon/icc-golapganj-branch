import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineDeviceHub } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Company Name</h2>
                    <p className="text-gray-400">1234 Street Name, City, Country</p>
                    <p className="text-gray-400">Email: info@company.com</p>
                    <p className="text-gray-400">Phone: (123) 456-7890</p>
                </div>
                
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="https://github.com" aria-label="GitHub">
                        <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
                    </a>
                    <a href="https://whatsapp.com" aria-label="WhatsApp">
                        <FaWhatsapp className="text-2xl hover:text-green-500 transition-colors" />
                    </a>
                </div>
                
                <div className="text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
