import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

const Customers = () => {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                if (user) {
                    const response = await axios.get(`http://localhost:3001/api/connection-requests/user/${user.email}`);
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
                <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 lg:flex gap-5 items-center">
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="User Photo"
                            className="w-64 object-cover rounded-xl"
                        />
                    )}
                    <div>
                        <p className="text-gray-700 text-xl font-semibold">Name: {user.displayName}</p>
                        <p className="text-gray-700 text-xl font-semibold">Email: {user.email}</p>
                        {/* <p className="text-gray-700 text-xl font-semibold">Role: {user.role}</p> */}
                    </div>
                </div>
            ) : (
                <p className="text-red-500">No user is logged in.</p>
            )}

            <div className="mt-8">
                {user && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Your Connection Requests</h2>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            {requests.length > 0 ? (
                                requests.map((request) => (
                                    <div key={request._id} className='mb-4'>
                                        <div className='rounded-xl p-5 shadow-xl hover:bg-gray-100'>
                                            <p>
                                                Customer Name: <span className='font-semibold'>{request.name}</span>
                                            </p>
                                            <p>
                                                Union Parishadh: <span className='font-semibold'>{request.unionName}</span>
                                            </p>
                                            <p>
                                                Contact Number: <span className='font-semibold'>{request.mobile}</span>
                                            </p>
                                            <p>
                                                Email: <span className='font-semibold'>{request.email}</span>
                                            </p>
                                            <p>
                                                Request Status: <span className='font-semibold'>{request.status}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No connection requests found.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Customers;
