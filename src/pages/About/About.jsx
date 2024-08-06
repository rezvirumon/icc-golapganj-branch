import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold">About</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">ICC Communication Ltd.</span>
            </div>
            <details className="collapse bg-white shadow-md rounded-md mb-4">
                <summary className="collapse-title text-xl font-medium px-4 py-2 cursor-pointer">
                    About Us
                </summary>
                <div className="collapse-content px-4 py-2">
                    <p className="mb-2">
                        ICC Communication is a Nationwide Internet Service Provider licensed by the Bangladesh Telecommunications Regulatory Commission (BTRC). We are a vital part of the ICC Group.
                    </p>
                    <p className="mb-2">
                        We offer broadband internet and private data communication solutions over fiber optic, wireless, and satellite technology throughout the country. ICC, with its state-of-the-art redundant backbone infrastructure, assures 100% uptime while providing ultimate client satisfaction, no matter how small a client may be.
                    </p>
                    <p>
                        Our Network Operation Center (NOC) is staffed 24/7 to respond to and fix any issues related to connectivity.
                    </p>
                </div>
            </details>

            <details className="collapse bg-white shadow-md rounded-md mb-4">
                <summary className="collapse-title text-xl font-medium px-4 py-2 cursor-pointer">
                    Our Mission
                </summary>
                <div className="collapse-content px-4 py-2">
                    <p>
                        Our mission is to provide reliable, high-speed internet and data communication services that exceed our customers' expectations through innovation, continuous improvement, and exceptional customer service.
                    </p>
                </div>
            </details>

            <details className="collapse bg-white shadow-md rounded-md mb-4">
                <summary className="collapse-title text-xl font-medium px-4 py-2 cursor-pointer">
                    Our Vision
                </summary>
                <div className="collapse-content px-4 py-2">
                    <p>
                        Our vision is to become the leading internet service provider in Bangladesh, recognized for our commitment to quality, innovation, and customer satisfaction.
                    </p>
                </div>
            </details>

            <details className="collapse bg-white shadow-md rounded-md mb-4">
                <summary className="collapse-title text-xl font-medium px-4 py-2 cursor-pointer">
                    Our Values
                </summary>
                <div className="collapse-content px-4 py-2">
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Integrity: We uphold the highest standards of integrity in all our actions.</li>
                        <li className="mb-2">Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
                        <li className="mb-2">Quality: We provide outstanding products and unsurpassed service that deliver premium value to our customers.</li>
                        <li className="mb-2">Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
                        <li className="mb-2">Innovation: We seek out and implement better solutions for our customers.</li>
                    </ul>
                </div>
            </details>

            <details className="collapse bg-white shadow-md rounded-md mb-4">
                <summary className="collapse-title text-xl font-medium px-4 py-2 cursor-pointer">
                    Our Services
                </summary>
                <div className="collapse-content px-4 py-2">
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Broadband Internet: High-speed internet services for residential and business customers.</li>
                        <li className="mb-2">Private Data Communication: Secure and reliable data communication solutions for businesses.</li>
                        <li className="mb-2">Fiber Optic Solutions: Advanced fiber optic technology for fast and reliable connectivity.</li>
                        <li className="mb-2">Wireless Solutions: Flexible wireless internet options for areas without fiber coverage.</li>
                        <li className="mb-2">Satellite Solutions: Satellite internet services for remote and rural areas.</li>
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default About;
