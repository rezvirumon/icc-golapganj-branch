import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MostRequested = () => {
    const [popularPackages, setPopularPackages] = useState([]);

    useEffect(() => {
        const fetchPopularPackages = async () => {
            try {
                const response = await axios.get('https://icc-golapganj-server.vercel.app/api/popular-packages');
                setPopularPackages(response.data.slice(0, 3)); // Limit to top 3 packages
            } catch (error) {
                console.error('Error fetching popular packages:', error.message);
            }
        };

        fetchPopularPackages();
    }, []);

    return (
        <div className="p-8 container mx-auto">
            <div className="text-3xl font-bold text-center mb-8">
                <span className="text-gray-800">Top 3 </span>
                <span className="text-green-600">Most Requested Packages</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularPackages.map((pkg, index) => (
                    <div
                        key={pkg._id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
                    >
                        <div className={`flex justify-center items-center mb-4`}>
                            <span className="text-4xl font-extrabold text-gray-800">
                                #{index + 1}
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-2xl font-bold text-green-700">{pkg._id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRequested;
