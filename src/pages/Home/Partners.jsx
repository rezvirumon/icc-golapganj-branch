import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const partners = [
        'https://www.icc.com.bd/images/partners/2.png',
        'https://www.icc.com.bd/images/partners/1.png',
        'https://www.icc.com.bd/images/partners/5.png',
        'https://www.icc.com.bd/images/partners/3.png',
        'https://www.icc.com.bd/images/partners/6.png',
        'https://www.icc.com.bd/images/partners/4.png',
    ];

    return (
        <div className="py-10 bg-gray-100">
            <div className="text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold">Valuable</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">Partners</span>
            </div>
            <div className="w-[350px;] lg:w-[1200px;] mx-auto px-4">
                <Slider {...settings}>
                    {partners.map((partner, index) => (
                        <div key={index} className="p-4 flex justify-center">
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="w-full h-auto rounded-lg bg-white shadow-md hover:shadow-xl object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Partners;
