import React, { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AreaPOP from './AreaPOP';

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
            <AreaPOP></AreaPOP>
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
                        <a href="https://www.facebook.com/rumonnetwork" aria-label="Facebook" className="text-2xl hover:text-blue-500 transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/rezvirumon" aria-label="GitHub" className="text-2xl hover:text-gray-400 transition-colors">
                            <FaGithub />
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=8801823685472&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F4T4huIifM%0A%0AHello%21+Can+I+get+more+info+on+this%3F&source_url=https%3A%2F%2Ffb.me%2F4T4huIifM&icebreaker=Hello%21+Can+I+get+more+info+on+this%3F&app=facebook&entry_point=post_cta&jid=8801823685472%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&source=FB_Post&context=ARAnkdBhI0rEEmrmlLwufH8zuwCvuAxjz-dkXyB-OPV5vdSftGyPUlbjdLZGJH2kAo02BQI9S7g_gnmzyRZKR9RLyrO53MX2W8IS1VXEupI60Pz9GTJBn28YGtOshbDqTTYrdtJnFY1LchxRR5AUjyHyIpm-sINA7bceMTVe6xZjC6U52CeiMkT5ZiVzQc8ZWKHxDw7drEkfgyk2BN-BifZdPvQAsXeSP-qoR0G743P2Pv0lY-5JABpFzQ1LJbwEaG7gh6AzBrk6Y-4FiB26QuzbbIoQ64Bz5a8JAR4E4BGemMQBxbpcaQ_TOHBwqQVWjndVZAYoAxs1unTC90rG_NMuD5yjFAHYnBeS_1Po&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MjQyMjIzNzUsInBob25lIjoiODgwMTgyMzY4NTQ3MiIsInRleHQiOiJMaW5rOlxuaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk1cblxuSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk0iLCJpY2VicmVha2VyIjoiSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI4ODAxODIzNjg1NDcyXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0In0.eiFkoFQCq7RCdwCMXPfVnCEwKEB3kusSWf25DV5fiFIG3c_ogO2e7Vaj7vtMuuPujDgGM5cmZlC9gHWLgR2VzQ&fbclid=IwY2xjawExIpJleHRuA2FlbQIxMAABHdP4QhUmFOxJLhIScEFgXQPlG11Z-SOcRbOhsYJ0iyMygB81euIktyb6EA_aem_BLfeZV9MJiDGbVNN7ab4oA" aria-label="WhatsApp" className="text-2xl hover:text-green-500 transition-colors">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
