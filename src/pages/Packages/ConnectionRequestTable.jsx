import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ConnectionRequestTable = () => {
  const [requests, setRequests] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://icc-golapganj-server.vercel.app/api/connection-requests');
        if (Array.isArray(response.data)) {
          setRequests(response.data);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        console.error('Error fetching connection requests:', error.message);
        setError('Failed to fetch connection requests');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleStatusChange = async (id, status) => {
    const result = await Swal.fire({
      title: `Are you sure you want to ${status.toLowerCase()} this request?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
      try {
        await axios.patch(`https://icc-golapganj-server.vercel.app/api/connection-requests/${id}/status`, { status });
        setRequests(requests.map(request =>
          request._id === id ? { ...request, status } : request
        ));
        Swal.fire('Success', `Request has been ${status.toLowerCase()}ed`, 'success');
      } catch (error) {
        console.error(`Error updating status to ${status}:`, error.message);
        Swal.fire('Error', `Failed to ${status.toLowerCase()} request`, 'error');
      }
    }
  };

  const handleDelete = async id => {
    const result = await Swal.fire({
      title: 'Are you sure you want to delete this request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://icc-golapganj-server.vercel.app/api/connection-requests/${id}`);
        setRequests(requests.filter(request => request._id !== id));
        Swal.fire('Deleted!', 'The request has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting request:', error.message);
        Swal.fire('Error', 'Failed to delete request', 'error');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-xl font-bold mb-4">Connection Requests</h1>
      {requests.length > 0 ? (
        <div className="bg-white shadow rounded p-4">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">#</th>
                <th className="border-b py-2">Name</th>
                <th className="border-b py-2">Email</th>
                <th className="border-b py-2">Package</th>
                <th className="border-b py-2">Union</th>
                <th className="border-b py-2">Status</th>
                <th className="border-b py-2">Request Date</th>
                <th className="border-b py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request._id} className={`transition-all duration-200 hover:bg-gray-100 ${index % 2 === 0 ? '' : 'bg-gray-50'}`}>
                  <td className="border-b py-2">{index + 1}</td>
                  <td className="border-b py-2">{request.name}</td>
                  <td className="border-b py-2">{request.email}</td>
                  <td className="border-b py-2">{request.packageName}</td>
                  <td className="border-b py-2">{request.unionName}</td>
                  <td className={`border-b py-2 font-bold ${request.status === 'Accepted' ? 'text-green-500' : request.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                    {request.status}
                  </td>
                  <td className="border-b py-2">{new Date(request.requestedDate).toLocaleDateString()}</td>
                  <td className="border-b py-2 flex justify-center space-x-2">
                    <button
                      className="transition-transform transform hover:scale-105 text-white bg-green-500 px-2 py-1 rounded"
                      onClick={() => handleStatusChange(request._id, 'Accepted')}
                    >
                      Accept
                    </button>
                    <button
                      className="transition-transform transform hover:scale-105 text-white bg-yellow-500 px-2 py-1 rounded"
                      onClick={() => handleStatusChange(request._id, 'Rejected')}
                    >
                      Reject
                    </button>
                    <button
                      className="transition-transform transform hover:scale-105 text-white bg-red-500 px-2 py-1 rounded"
                      onClick={() => handleDelete(request._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white shadow rounded p-4">No connection requests found</div>
      )}
    </div>
  );
};

export default ConnectionRequestTable;
