import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

const ConnectionForm = ({ packageName }) => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        unionName: '',
        message: '',
        packageName: packageName,
        requestedDate: '', // Initialize requestedDate
    });

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                name: user.displayName || '',
                email: user.email || '',
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set the current date as requestedDate
        const currentDate = new Date().toISOString();
        setFormData((prevData) => ({
            ...prevData,
            requestedDate: currentDate,
        }));

        try {
            await axios.post('https://icc-golapganj-server.vercel.app/api/connection-requests', {
                ...formData,
                requestedDate: currentDate, // Send the current date with the form data
            });
            alert('Connection request submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            alert('Error submitting form');
        }
    };

    return (
        <div className="lg:px-5 py-10">
            <div className="lg:text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold text-green-600">Get Connected</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold text-gray-800">Fill the Form</span>
            </div>
            <form className="max-w-lg mx-auto glass p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50" onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="mb-4 flex items-center border-b-2 ">
                    <FaUser className="text-gray-500 mr-3" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4 flex items-center border-b-2 ">
                    <FaPhone className="text-gray-500 mr-3" />
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4 flex items-center border-b-2 ">
                    <FaEnvelope className="text-gray-500 mr-3" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4 flex items-center border-b-2 ">
                    <FaMapMarkerAlt className="text-gray-500 mr-3" />
                    <input
                        type="text"
                        id="unionName"
                        name="unionName"
                        value={formData.unionName}
                        onChange={handleChange}
                        placeholder="Union Name"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-6 flex items-center border-b-2 ">
                    <FaCommentDots className="text-gray-500 mr-3" />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-24"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConnectionForm;
