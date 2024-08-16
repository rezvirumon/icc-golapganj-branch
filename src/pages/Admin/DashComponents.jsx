import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUsers, FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaChartLine, FaGlobe, FaDatabase } from 'react-icons/fa';

const DashComponents = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalRequests, setTotalRequests] = useState(0);
    const [totalAccepted, setTotalAccepted] = useState(0);
    const [totalRejected, setTotalRejected] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const [totalTraffic, setTotalTraffic] = useState(0); // Example additional stat
    const [totalServers, setTotalServers] = useState(0); // Example additional stat
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const [usersResponse, requestsResponse] = await Promise.all([
                    axios.get('https://icc-golapganj-server.vercel.app/api/users'), // Adjust if necessary
                    axios.get('https://icc-golapganj-server.vercel.app/api/connection-requests'), // Adjust if necessary
                    // Add more API calls here for additional stats
                ]);

                // Count users
                setTotalUsers(usersResponse.data.length);

                // Count requests and categorize them by status
                const requests = requestsResponse.data;
                setTotalRequests(requests.length);
                setTotalAccepted(requests.filter(r => r.status === 'Accepted').length);
                setTotalRejected(requests.filter(r => r.status === 'Rejected').length);
                setTotalPending(requests.filter(r => r.status === 'Pending').length);

                // Example data fetching for additional stats
                // setTotalTraffic(trafficResponse.data.totalTraffic);
                // setTotalServers(serversResponse.data.totalServers);

            } catch (error) {
                console.error('Error fetching statistics:', error.message);
                setError('Failed to fetch statistics');
            } finally {
                setLoading(false);
            }
        };

        fetchStatistics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-xl font-bold mb-4">Dashboard Statistics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaUsers className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Users</h2>
                        <p className="text-2xl font-bold">{totalUsers}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaClipboardList className="text-4xl text-green-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Requests</h2>
                        <p className="text-2xl font-bold">{totalRequests}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaCheckCircle className="text-4xl text-green-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Accepted</h2>
                        <p className="text-2xl font-bold">{totalAccepted}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaTimesCircle className="text-4xl text-red-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Rejected</h2>
                        <p className="text-2xl font-bold">{totalRejected}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaHourglassHalf className="text-4xl text-yellow-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Pending</h2>
                        <p className="text-2xl font-bold">{totalPending}</p>
                    </div>
                </div>
                {/* Example additional components */}
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaChartLine className="text-4xl text-purple-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Traffic</h2>
                        <p className="text-2xl font-bold">{totalTraffic}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaDatabase className="text-4xl text-teal-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Total Servers</h2>
                        <p className="text-2xl font-bold">{totalServers}</p>
                    </div>
                </div>
                <div className="p-4 bg-white shadow rounded flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FaGlobe className="text-4xl text-indigo-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">Global Connections</h2>
                        <p className="text-2xl font-bold">{totalServers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashComponents;
