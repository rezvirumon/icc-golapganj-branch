import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Packages1 from '../../assets/resource/10.png';
import Packages2 from '../../assets/resource/12.png';
import Packages3 from '../../assets/resource/20.png';
import Packages4 from '../../assets/resource/30.png';
import Packages5 from '../../assets/resource/45.png';
import Packages6 from '../../assets/resource/100.png';
import packagesData from '../../../public/data/package.json';

const packageImages = {
  Packages1,
  Packages2,
  Packages3,
  Packages4,
  Packages5,
  Packages6,
};

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Map package images to the JSON data
    const mappedPackages = packagesData.map(pkg => ({
      ...pkg,
      img: packageImages[pkg.img],
    }));
    setPackages(mappedPackages);
  }, []);

  return (
    <div className="lg:px-5 py-10">
      <div className="text-3xl flex gap-4 justify-center my-10">
        <span className="font-bold">Packages</span>
        <span className="text-green-600">|</span>
        <span className="font-semibold">Choose Your Plan</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-between p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
          >
            <img src={pkg.img} alt={pkg.title} className="mb-4 rounded-lg h-44 w-full object-cover" />
            <div className="flex gap-5">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              /
              <h3 className="text-xl font-semibold mb-2">{pkg.price}TK</h3>
            </div>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              {pkg.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link to={`/getstart/${index}`} className="relative w-full text-center px-5 py-2 font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
              <span className="relative">Get Started</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
