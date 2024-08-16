import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AnnouncementEditor = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [editing, setEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        message: '',
        date: '',
        category: '',
    });

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get('https://icc-golapganj-server.vercel.app/api/announcements');
                setAnnouncements(response.data);
            } catch (error) {
                console.error('Error fetching announcements:', error.message);
            }
        };

        fetchAnnouncements();
    }, []);

    const handleEditClick = (announcement) => {
        setEditing(announcement._id);
        setFormData({
            title: announcement.title,
            message: announcement.message,
            date: announcement.date.split('T')[0], // Format the date for input
            category: announcement.category,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://icc-golapganj-server.vercel.app/api/announcements/${id}`);
            setAnnouncements(announcements.filter((announcement) => announcement._id !== id));
            Swal.fire('Deleted!', 'Announcement has been deleted.', 'success');
        } catch (error) {
            console.error('Error deleting announcement:', error.message);
            Swal.fire('Error!', 'Failed to delete announcement.', 'error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent form from submitting the traditional way

        try {
            const { title, message, date, category } = formData;
            
            if (!editing) {
                throw new Error('Announcement ID is required');
            }

            const response = await axios.patch(`https://icc-golapganj-server.vercel.app/api/announcements/${editing}`, { title, message, date, category });
            console.log('Announcement updated:', response.data);
            
            // Update the announcements list
            setAnnouncements(announcements.map((ann) => (ann._id === editing ? response.data : ann)));
            setEditing(null);
            setFormData({ title: '', message: '', date: '', category: '' });
            Swal.fire('Updated!', 'Announcement has been updated.', 'success');
        } catch (error) {
            console.error('Error updating announcement:', error.message);
            Swal.fire('Error!', 'Failed to update announcement.', 'error');
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Edit or Delete Announcements</h2>
            <ul className="space-y-4">
                {announcements.map((announcement) => (
                    <li key={announcement._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{announcement.title}</h3>
                        <p>{announcement.message}</p>
                        <small>{new Date(announcement.date).toLocaleDateString()}</small>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                onClick={() => handleEditClick(announcement)}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(announcement._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {editing && (
                <form onSubmit={handleUpdate} className="mt-6">
                    <h3 className="text-xl font-bold mb-4">Edit Announcement</h3>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Update Announcement
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditing(null)}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AnnouncementEditor;
