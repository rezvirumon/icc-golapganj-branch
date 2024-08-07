import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth'; // Import your custom hook or context for authentication

const ConnectionForm = ({ packageName }) => {
    const { user } = useAuth(); // Get the user from the auth hook/context
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        unionName: '',
        message: '',
        packageName: packageName, // Include package name in the form data
    });

    useEffect(() => {
        if (user) {
            // Pre-fill form data with user information if available
            setFormData((prevData) => ({
                ...prevData,
                name: user.displayName || '',
                email: user.email || '',
                // Add default values for other fields if needed
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
        try {
            await axios.post('http://localhost:3001/api/connection-requests', formData);
            alert('Connection request submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            alert('Error submitting form');
        }
    };

    return (
        <div className="lg:px-5 py-10 bg-gray-100">
            <div className="text-3xl flex gap-4 justify-center my-10">
                <span className="font-bold">Get Connected</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">Fill the Form</span>
            </div>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                        Mobile:
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unionName">
                        Union Name:
                    </label>
                    <input
                        type="text"
                        id="unionName"
                        name="unionName"
                        value={formData.unionName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConnectionForm;
