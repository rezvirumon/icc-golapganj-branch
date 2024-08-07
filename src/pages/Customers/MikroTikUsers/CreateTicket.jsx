import { useState } from 'react';

const CreateTicket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [contactInfo, setContactInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log({
            title,
            description,
            priority,
            category,
            attachment,
            contactInfo
        });
        // Here you might want to add logic for submitting the data to your backend
    };

    return (
        <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a Support Ticket</h2>
            <p className="mb-4 text-gray-600">Please fill out the form below to report an issue or request support. Our Network Operation Center will get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Ticket Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachment">
                        Attachment (Optional)
                    </label>
                    <input
                        type="file"
                        id="attachment"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        onChange={(e) => setAttachment(e.target.files[0])}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-info">
                        Contact Information
                    </label>
                    <input
                        type="text"
                        id="contact-info"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                >
                    Submit Ticket
                </button>
            </form>
        </div>
    );
};

export default CreateTicket;
