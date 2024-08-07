import React from 'react';
import { useParams } from 'react-router-dom';
import Packages1 from '../../assets/resource/10.png';
import Packages2 from '../../assets/resource/12.png';
import Packages3 from '../../assets/resource/20.png';
import Packages4 from '../../assets/resource/30.png';
import Packages5 from '../../assets/resource/45.png';
import Packages6 from '../../assets/resource/100.png';
import packagesData from '../../../public/data/package.json'; // Adjust the path if necessary
import ConnectionForm from './ConnectionForm';

const packageImages = {
    Packages1,
    Packages2,
    Packages3,
    Packages4,
    Packages5,
    Packages6,
};

const GetPackage = () => {
    const { id } = useParams();
    const pkg = packagesData[id];

    if (!pkg) {
        return <div>Package not found</div>;
    }

    const packageImage = packageImages[pkg.img];

    return (
        <div className="lg:px-5 py-10">
            <div className='lg:flex items-center w-full justify-between container mx-auto'>
                <div className='lg:w-3/6'>
                    <div className="text-3xl flex gap-4 justify-center my-10">
                        <span className="font-bold text-green-600">{pkg.title} Package</span>
                    </div>
                    <div className="flex flex-col items-center justify-between p-4 rounded-lg">
                        <img src={packageImage} alt={pkg.title} className="mb-4 rounded-lg object-cover" />
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
                    </div>
                </div>
                <div className='lg:w-3/6'>
                    <ConnectionForm packageName={pkg.title}></ConnectionForm>
                </div>
            </div>
        </div>
    );
};

export default GetPackage;
