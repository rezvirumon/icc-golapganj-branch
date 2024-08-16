import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Swiper className="mySwiper my-20">
        {[
          { src: 'https://travel-slider.uiinitiative.com/images/usa.jpg', alt: 'USA' },
          { src: 'https://travel-slider.uiinitiative.com/images/england.jpg', alt: 'England' },
          { src: 'https://travel-slider.uiinitiative.com/images/france.jpg', alt: 'France' },
          { src: 'https://travel-slider.uiinitiative.com/images/italy.jpg', alt: 'Italy' },
          { src: 'https://travel-slider.uiinitiative.com/images/russia.jpg', alt: 'Russia' },
          { src: 'https://travel-slider.uiinitiative.com/images/egypt.jpg', alt: 'Egypt' },
          { src: 'https://travel-slider.uiinitiative.com/images/india.jpg', alt: 'India' },
          { src: 'https://travel-slider.uiinitiative.com/images/japan.jpg', alt: 'Japan' }
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full rounded-xl shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded shadow-md transform transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                {item.alt}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
