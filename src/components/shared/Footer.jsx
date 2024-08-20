import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Contact Information */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2">ICC Communication Ltd. Golapganj</h2>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Golapganj Bazar, Birganj, Dinajpur</p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Email: <a href="mailto:support@icc-communication.com" className="hover:text-green-300">support@icc-communication.com</a></p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Branch: +880 09639185472</p>
                    <p className="text-gray-400 hover:text-green-500 transition-colors">Support: +880 09639123123</p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="https://www.facebook.com/rumonnetwork" aria-label="Facebook" className="text-2xl hover:text-blue-500 transition-colors">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/rezvirumon" aria-label="GitHub" className="text-2xl hover:text-gray-400 transition-colors">
                        <FaGithub />
                    </a>
                    
                    <a href="https://api.whatsapp.com/send?phone=8801823685472&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F4T4huIifM%0A%0AHello%21+Can+I+get+more+info+on+this%3F&source_url=https%3A%2F%2Ffb.me%2F4T4huIifM&icebreaker=Hello%21+Can+I+get+more+info+on+this%3F&app=facebook&entry_point=post_cta&jid=8801823685472%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&source=FB_Post&context=ARAnkdBhI0rEEmrmlLwufH8zuwCvuAxjz-dkXyB-OPV5vdSftGyPUlbjdLZGJH2kAo02BQI9S7g_gnmzyRZKR9RLyrO53MX2W8IS1VXEupI60Pz9GTJBn28YGtOshbDqTTYrdtJnFY1LchxRR5AUjyHyIpm-sINA7bceMTVe6xZjC6U52CeiMkT5ZiVzQc8ZWKHxDw7drEkfgyk2BN-BifZdPvQAsXeSP-qoR0G743P2Pv0lY-5JABpFzQ1LJbwEaG7gh6AzBrk6Y-4FiB26QuzbbIoQ64Bz5a8JAR4E4BGemMQBxbpcaQ_TOHBwqQVWjndVZAYoAxs1unTC90rG_NMuD5yjFAHYnBeS_1Po&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MjQyMjIzNzUsInBob25lIjoiODgwMTgyMzY4NTQ3MiIsInRleHQiOiJMaW5rOlxuaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk1cblxuSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk0iLCJpY2VicmVha2VyIjoiSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI4ODAxODIzNjg1NDcyXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0In0.eiFkoFQCq7RCdwCMXPfVnCEwKEB3kusSWf25DV5fiFIG3c_ogO2e7Vaj7vtMuuPujDgGM5cmZlC9gHWLgR2VzQ&fbclid=IwY2xjawExIpJleHRuA2FlbQIxMAABHdP4QhUmFOxJLhIScEFgXQPlG11Z-SOcRbOhsYJ0iyMygB81euIktyb6EA_aem_BLfeZV9MJiDGbVNN7ab4oA" aria-label="WhatsApp" className="text-2xl hover:text-green-500 transition-colors">
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
