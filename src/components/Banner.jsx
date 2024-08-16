import React, { useState, useEffect } from 'react';
import Packages1 from '../assets/resource/10.png';
import Packages2 from '../assets/resource/12.png';
import Packages3 from '../assets/resource/20.png';
import Packages4 from '../assets/resource/30.png';
import Packages5 from '../assets/resource/45.png';
import Packages6 from '../assets/resource/100.png';
import icctheme from '../assets/resource/icc-theme.png';

const Banner = () => {
    const banners = [
        {
            img: Packages1,
            title: '10Mbps',
            description: 'Perfect for casual browsing and social media. Enjoy a smooth internet experience for everyday use.',
        },
        {
            img: Packages2,
            title: '12Mbps',
            description: 'A step up for those who stream music and videos. Get more speed for better streaming quality.',
        },
        {
            img: Packages3,
            title: '20Mbps',
            description: 'Ideal for families with multiple devices. Stream, browse, and play games without any lag.',
        },
        {
            img: Packages4,
            title: '30Mbps',
            description: 'Great for HD video streaming and online gaming. Experience high-speed internet for all your needs.',
        },
        {
            img: Packages5,
            title: '45Mbps',
            description: 'Suitable for heavy internet users. Enjoy fast downloads, seamless streaming, and online gaming.',
        },
        {
            img: Packages6,
            title: '100Mbps',
            description: 'The ultimate internet speed for power users. Get lightning-fast downloads and ultra HD streaming.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
                setAnimate(false);
            }, 500); // Duration of the fade-out animation
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    const { img, title, description } = banners[currentIndex];

    return (
        <div className="hero lg:py-24 py-5 border shadow-xl bg-white">
            <div className={`lg:flex flex-col justify-between w-full container p-5 items-center lg:flex-row-reverse transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
                <img
                    src={img}
                    className="lg:max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50 rounded-xl"
                    alt={title}
                />
                <div className="lg:flex-grow lg:mr-10 cursor-pointer relative z-10">
                    <h1 className="lg:text-5xl text-3xl my-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-900">
                        {title}
                    </h1>
                    <p className="lg:py-6 py-4 lg:w-96">{description}</p>
                    <a href="/login" className="relative inline-block px-5 py-3 font-medium text-white bg-green-500 rounded-md group hover:bg-green-700 transition duration-300">
                        <span className="flex relative z-10">Get Started</span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 transform -translate-x-2 -translate-y-2 bg-green-700 rounded-md group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    </a>
                </div>
            </div>
            <div className='absolute inset-0 pointer-events-none lg:block hidden'>
                <img className='absolute opacity-10 -left-48 -top-16 h-[700px;]' src={icctheme} alt="ICC Theme" />
            </div>
        </div>
    );
};

export default Banner;
