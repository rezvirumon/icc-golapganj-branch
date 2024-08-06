import React from 'react';
import Packages1 from '../../assets/resource/10.png';
import Packages2 from '../../assets/resource/12.png';
import Packages3 from '../../assets/resource/20.png';
import Packages4 from '../../assets/resource/30.png';
import Packages5 from '../../assets/resource/45.png';
import Packages6 from '../../assets/resource/100.png';

const Packages = () => {
    const packages = [
        {
            img: Packages1,
            title: '10Mbps',
            price: '500',
            description: [
                'Perfect for casual browsing and social media',
                'Smooth internet experience for everyday use',
                'Affordable and reliable'
            ],
        },
        {
            img: Packages2,
            title: '12Mbps',
            price: '600',
            description: [
                'A step up for those who stream music and videos',
                'Better streaming quality',
                'Suitable for light usage'
            ],
        },
        {
            img: Packages3,
            title: '20Mbps',
            price: '800',
            description: [
                'Ideal for families with multiple devices',
                'Stream, browse, and play games without lag',
                'Good for small households'
            ],
        },
        {
            img: Packages4,
            title: '30Mbps',
            price: '1000',
            description: [
                'Great for HD video streaming and online gaming',
                'High-speed internet for all your needs',
                'Supports multiple users'
            ],
        },
        {
            img: Packages5,
            title: '45Mbps',
            price: '1500',
            description: [
                'Suitable for heavy internet users',
                'Fast downloads and seamless streaming',
                'Excellent for gaming and streaming'
            ],
        },
        {
            img: Packages6,
            title: '100Mbps',
            price: '2000',
            description: [
                'The ultimate internet speed for power users',
                'Lightning-fast downloads and ultra HD streaming',
                'Perfect for large households or businesses'
            ],
        },
    ];

    return (
        <div className="lg:px-5 py-10 bg-">
            <div className="text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold">Packages</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">Choose Your Plan</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {packages.map((pkg, index) => (
                    <div key={index} className="w-full flex flex-col items-center justify-between p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50">
                        <img src={pkg.img} alt={pkg.title} className="mb-4 rounded-lg h-44 w-full object-cover" />
                        <div className='flex gap-5'>
                            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                            /
                            <h3 className="text-xl font-semibold mb-2">{pkg.price}TK</h3>
                        </div>
                        <ul className="text-gray-600 mb-4 list-disc list-inside">
                            {pkg.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <a href="#" className="relative w-full text-center px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
                            <span className="relative">Get Started</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;
