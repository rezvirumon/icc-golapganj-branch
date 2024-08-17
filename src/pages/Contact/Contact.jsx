import React, { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h8zvps2', 'template_glczk0e', form.current, 'kSx_kx58Li5qJvNVT')
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your message has been sent successfully.',
                        confirmButtonText: 'OK',
                    });
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Something went wrong: ${error.text}`,
                        confirmButtonText: 'Try Again',
                    });
                }
            );
    };

    return (
        <div className="container mx-auto p-6">
            <div className="text-3xl flex gap-4 justify-center mb-20 border-b-2 pb-5">
                <span className="font-bold">Contact</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">Us</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded-md p-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="bg-white shadow-md rounded-md p-6 mb-6">
                        <p className="text-gray-700">
                            <strong>Address:</strong> Golapganj Bazar, Birganj, Dinajpur
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Email:</strong> info@icc-communication.com
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Phone:</strong> +880 9639185472
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Whatsapp:</strong> +880 1823685472
                        </p>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com/icccommunication" aria-label="Facebook">
                            <FaFacebook className="text-2xl text-gray-700 hover:text-blue-500 transition-colors" />
                        </a>
                        <a href="https://github.com/icccommunication" aria-label="GitHub">
                            <FaGithub className="text-2xl text-gray-700 hover:text-gray-400 transition-colors" />
                        </a>
                        <a href="https://linkedin.com/company/icccommunication" aria-label="LinkedIn">
                            <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-700 transition-colors" />
                        </a>
                        <a href="https://whatsapp.com" aria-label="WhatsApp">
                            <FaWhatsapp className="text-2xl text-gray-700 hover:text-green-500 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
