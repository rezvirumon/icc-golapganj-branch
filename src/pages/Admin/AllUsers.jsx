import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Example: Fetching users from an API endpoint
        axios.get('https://icc-golapganj-server.vercel.app/api/users') // Replace with your actual API endpoint
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="overflow-x-auto">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>All Users</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h1 className="text-xl font-bold mb-4">Total Users</h1>
                    <table className="table">
                        {/* Table Head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoURL}
                                                        alt={user.displayName}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.displayName}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{user.role}</span>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default AllUsers;
