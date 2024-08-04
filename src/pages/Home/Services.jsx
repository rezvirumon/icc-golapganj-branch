import React from 'react';
import { FaNetworkWired, FaHome, FaPhone, FaHeadset, FaLink, FaServer } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="px-5 py-10">
            <div className="text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold">Services</span>
                <span className="text-green-600">|</span>
                <span>We Offer</span>
            </div>

            {/* Service Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                {/* Service Item 1 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaNetworkWired className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">Corporate Internet</h3>
                    <p className="text-center text-gray-600">
                        We help our clients build, connect, operate and maintain their office network. We ensure the best quality services over Bangladesh.
                    </p>
                </div>
                
                {/* Service Item 2 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaHome className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">Home Internet</h3>
                    <p className="text-center text-gray-600">
                        Providing reliable and high-speed internet solutions for your home needs, with exceptional customer service and support.
                    </p>
                </div>

                {/* Service Item 3 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaPhone className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">IP Telephony</h3>
                    <p className="text-center text-gray-600">
                        Our IP telephony services provide clear and reliable communication solutions for both small and large businesses.
                    </p>
                </div>

                {/* Service Item 4 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaHeadset className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                    <p className="text-center text-gray-600">
                        We offer 24/7 customer support to address any issues and ensure that your internet and telephony services are always running smoothly.
                    </p>
                </div>

                {/* Service Item 5 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaLink className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">Network Solution</h3>
                    <p className="text-center text-gray-600">
                        Tailored network solutions to meet the specific needs of your business, ensuring optimal performance and security.
                    </p>
                </div>

                {/* Service Item 6 */}
                <div className="bg-base-200 w-full h-72 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <FaServer className="text-4xl text-green-600 mb-4 transition-transform duration-300 transform hover:scale-110" />
                    <h3 className="text-xl font-semibold mb-2">Biggest FTP Server</h3>
                    <p className="text-center text-gray-600">
                        Offering high-capacity FTP server solutions to handle large volumes of data with speed and reliability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
