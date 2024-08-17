import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import Loader from '../../components/shared/Loader';
import EditProfileModal from './EditProfileModal';
import MikroTik from './MikroTikUsers/MikroTik';

const Customers = () => {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                if (user) {
                    const response = await axios.get(`https://icc-golapganj-server.vercel.app/api/connection-requests/user/${user.email}`);
                    setRequests(response.data);
                }
            } catch (error) {
                setError('Error fetching connection requests');
                console.error('Error fetching connection requests:', error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [user]);

    if (loading) return <Loader />;
    if (error) return <p className="text-red-500">{error}</p>;

    const handleEditProfile = () => {
        setIsEditModalOpen(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
                <div className="bg-white shadow-md rounded-lg p-6 lg:flex gap-5 items-center mb-6">
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="User Photo"
                            className="w-64 h-64 object-cover rounded-xl shadow-md border-4 p-3 border-green-500"
                        />
                    )}
                    <div className="mt-4 lg:mt-0">
                        <p className="text-gray-700 text-xl font-semibold">Name: {user.displayName}</p>
                        <p className="text-gray-700 text-xl font-semibold">Email: {user.email}</p>
                        <button 
                            onClick={handleEditProfile} 
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Edit Profile
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-red-500">No user is logged in.</p>
            )}

            {/* Custom Tabs Implementation */}
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Profile Details" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h2 className="text-xl font-bold mb-4">Your Profile Details</h2>
                    <div className="bg-gray-50 p-5 rounded-xl shadow-lg">
                        <p className="text-gray-700">
                            Display Name: <span className="font-semibold">{user.displayName}</span>
                        </p>
                        <p className="text-gray-700">
                            Email: <span className="font-semibold">{user.email}</span>
                        </p>
                        {/* Add more details like role, account creation date, etc. */}
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Connection Requests"
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h2 className="text-xl font-bold mb-4">Your Connection Requests</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <div key={request._id} className="mb-4">
                                    <div className="bg-gray-50 p-5 rounded-xl shadow-lg hover:bg-gray-100 transition-colors">
                                        <p className="text-gray-700">
                                            Customer Name: <span className="font-semibold">{request.name}</span>
                                        </p>
                                        <p className="text-gray-700">
                                            Union Parishadh: <span className="font-semibold">{request.unionName}</span>
                                        </p>
                                        <p className="text-gray-700">
                                            Contact Number: <span className="font-semibold">{request.mobile}</span>
                                        </p>
                                        <p className="text-gray-700">
                                            Email: <span className="font-semibold">{request.email}</span>
                                        </p>
                                        <p className="text-gray-700">
                                            Request Status: <span className="font-semibold">{request.status}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No connection requests found.</p>
                        )}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="PPPEoE Details" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {/* You can add more content or another section here */}
                   <MikroTik></MikroTik>
                </div>
            </div>

            {isEditModalOpen && <EditProfileModal user={user} onClose={() => setIsEditModalOpen(false)} />}
        </div>
    );
};

export default Customers;
