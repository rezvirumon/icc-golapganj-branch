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
        const response = await axios.get('http://localhost:3001/api/connection-requests');
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
        await axios.patch(`http://localhost:3001/api/connection-requests/${id}/status`, { status });
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
        await axios.delete(`http://localhost:3001/api/connection-requests/${id}`);
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
    <div className="overflow-x-auto container mx-auto my-10 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Connection Requests</h1>
      {requests.length > 0 ? (
        <table className="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Package</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request._id} className={index % 2 === 0 ? '' : 'hover'}>
                <th>{index + 1}</th>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.packageName}</td>
                <td>{request.status}</td>
                <td className="flex justify-center">
                  <button
                    className="btn btn-sm btn-success mr-2"
                    onClick={() => handleStatusChange(request._id, 'Accepted')}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => handleStatusChange(request._id, 'Rejected')}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(request._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No connection requests found</div>
      )}
    </div>
  );
};

export default ConnectionRequestTable;
