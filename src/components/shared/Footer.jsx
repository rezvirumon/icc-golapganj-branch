import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Contact Information */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">ICC Communication Ltd.</h2>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Golapganj Bazar, Birganj, Dinajpur</p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Email: <a href="mailto:support@icc-communication.com" className="hover:text-green-300">support@icc-communication.com</a></p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Branch: +880 09639185472</p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Support: +880 09639123123</p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="https://facebook.com/icccommunication" aria-label="Facebook" className="text-2xl hover:text-blue-500 transition-colors">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/icccommunication" aria-label="GitHub" className="text-2xl hover:text-gray-400 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/company/icccommunication" aria-label="LinkedIn" className="text-2xl hover:text-blue-700 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://whatsapp.com" aria-label="WhatsApp" className="text-2xl hover:text-green-500 transition-colors">
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} ICC Communication Ltd. Golapganj All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
