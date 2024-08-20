import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import newIcctheme from '../../assets/resource/icc-theme.png';

const teamMembers = [
    {
        name: 'Humayun Kabeer',
        role: 'Owner (Golapganj Branch)',
        image: 'https://i.ibb.co/S6xrXK3/Untitled-design-7.png',
        social: {
            facebook: 'https://www.facebook.com/humaiun.kabir.5201',
            whatsapp: 'https://api.whatsapp.com/send?phone=8801722996081&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F4T4huIifM%0A%0AHello%21+Can+I+get+more+info+on+this%3F&source_url=https%3A%2F%2Ffb.me%2F4T4huIifM&icebreaker=Hello%21+Can+I+get+more+info+on+this%3F&app=facebook&entry_point=post_cta&jid=8801823685472%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&source=FB_Post&context=ARAnkdBhI0rEEmrmlLwufH8zuwCvuAxjz-dkXyB-OPV5vdSftGyPUlbjdLZGJH2kAo02BQI9S7g_gnmzyRZKR9RLyrO53MX2W8IS1VXEupI60Pz9GTJBn28YGtOshbDqTTYrdtJnFY1LchxRR5AUjyHyIpm-sINA7bceMTVe6xZjC6U52CeiMkT5ZiVzQc8ZWKHxDw7drEkfgyk2BN-BifZdPvQAsXeSP-qoR0G743P2Pv0lY-5JABpFzQ1LJbwEaG7gh6AzBrk6Y-4FiB26QuzbbIoQ64Bz5a8JAR4E4BGemMQBxbpcaQ_TOHBwqQVWjndVZAYoAxs1unTC90rG_NMuD5yjFAHYnBeS_1Po&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MjQyMjIzNzUsInBob25lIjoiODgwMTgyMzY4NTQ3MiIsInRleHQiOiJMaW5rOlxuaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk1cblxuSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk0iLCJpY2VicmVha2VyIjoiSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI4ODAxODIzNjg1NDcyXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0In0.eiFkoFQCq7RCdwCMXPfVnCEwKEB3kusSWf25DV5fiFIG3c_ogO2e7Vaj7vtMuuPujDgGM5cmZlC9gHWLgR2VzQ&fbclid=IwY2xjawExIpJleHRuA2FlbQIxMAABHdP4QhUmFOxJLhIScEFgXQPlG11Z-SOcRbOhsYJ0iyMygB81euIktyb6EA_aem_BLfeZV9MJiDGbVNN7ab4oA',

        },
    },
    {
        name: 'Rumon',
        role: 'Network Engineer & Web Developer',
        image: 'https://i.ibb.co/QC6D18j/Untitled-design-6.png',
        social: {
            facebook: 'https://facebook.com/janesmith',
            twitter: 'https://twitter.com/janesmith',
            linkedin: 'https://www.linkedin.com/in/hasan-rumon/',
            github: 'https://github.com/rezvirumon',
            whatsapp: 'https://api.whatsapp.com/send?phone=8801823685472&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F4T4huIifM%0A%0AHello%21+Can+I+get+more+info+on+this%3F&source_url=https%3A%2F%2Ffb.me%2F4T4huIifM&icebreaker=Hello%21+Can+I+get+more+info+on+this%3F&app=facebook&entry_point=post_cta&jid=8801823685472%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&source=FB_Post&context=ARAnkdBhI0rEEmrmlLwufH8zuwCvuAxjz-dkXyB-OPV5vdSftGyPUlbjdLZGJH2kAo02BQI9S7g_gnmzyRZKR9RLyrO53MX2W8IS1VXEupI60Pz9GTJBn28YGtOshbDqTTYrdtJnFY1LchxRR5AUjyHyIpm-sINA7bceMTVe6xZjC6U52CeiMkT5ZiVzQc8ZWKHxDw7drEkfgyk2BN-BifZdPvQAsXeSP-qoR0G743P2Pv0lY-5JABpFzQ1LJbwEaG7gh6AzBrk6Y-4FiB26QuzbbIoQ64Bz5a8JAR4E4BGemMQBxbpcaQ_TOHBwqQVWjndVZAYoAxs1unTC90rG_NMuD5yjFAHYnBeS_1Po&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MjQyMjIzNzUsInBob25lIjoiODgwMTgyMzY4NTQ3MiIsInRleHQiOiJMaW5rOlxuaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk1cblxuSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk0iLCJpY2VicmVha2VyIjoiSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI4ODAxODIzNjg1NDcyXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0In0.eiFkoFQCq7RCdwCMXPfVnCEwKEB3kusSWf25DV5fiFIG3c_ogO2e7Vaj7vtMuuPujDgGM5cmZlC9gHWLgR2VzQ&fbclid=IwY2xjawExIpJleHRuA2FlbQIxMAABHdP4QhUmFOxJLhIScEFgXQPlG11Z-SOcRbOhsYJ0iyMygB81euIktyb6EA_aem_BLfeZV9MJiDGbVNN7ab4oA',
        },
    },
    {
        name: 'Jahangir Alom',
        role: 'Senior Fiber Technician',
        image: 'https://i.ibb.co/VTLx1Td/Untitled-design-9.png',
        social: {
            facebook: 'https://www.facebook.com/jahanger.alom.10',
            
        },
    },
    {
        name: 'Najmul Khan',
        role: 'Network Support & Fiber Technician',
        image: 'https://i.ibb.co/6bJRJFk/Untitled-design-8.png',
        social: {
            facebook: 'https://www.facebook.com/mdnajmulhossain1998',
            whatsapp: 'https://api.whatsapp.com/send?phone=8801845594383&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F4T4huIifM%0A%0AHello%21+Can+I+get+more+info+on+this%3F&source_url=https%3A%2F%2Ffb.me%2F4T4huIifM&icebreaker=Hello%21+Can+I+get+more+info+on+this%3F&app=facebook&entry_point=post_cta&jid=8801823685472%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&source=FB_Post&context=ARAnkdBhI0rEEmrmlLwufH8zuwCvuAxjz-dkXyB-OPV5vdSftGyPUlbjdLZGJH2kAo02BQI9S7g_gnmzyRZKR9RLyrO53MX2W8IS1VXEupI60Pz9GTJBn28YGtOshbDqTTYrdtJnFY1LchxRR5AUjyHyIpm-sINA7bceMTVe6xZjC6U52CeiMkT5ZiVzQc8ZWKHxDw7drEkfgyk2BN-BifZdPvQAsXeSP-qoR0G743P2Pv0lY-5JABpFzQ1LJbwEaG7gh6AzBrk6Y-4FiB26QuzbbIoQ64Bz5a8JAR4E4BGemMQBxbpcaQ_TOHBwqQVWjndVZAYoAxs1unTC90rG_NMuD5yjFAHYnBeS_1Po&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MjQyMjIzNzUsInBob25lIjoiODgwMTgyMzY4NTQ3MiIsInRleHQiOiJMaW5rOlxuaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk1cblxuSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC80VDRodUlpZk0iLCJpY2VicmVha2VyIjoiSGVsbG8hIENhbiBJIGdldCBtb3JlIGluZm8gb24gdGhpcz8iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI4ODAxODIzNjg1NDcyXHUwMDQwcy53aGF0c2FwcC5uZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0In0.eiFkoFQCq7RCdwCMXPfVnCEwKEB3kusSWf25DV5fiFIG3c_ogO2e7Vaj7vtMuuPujDgGM5cmZlC9gHWLgR2VzQ&fbclid=IwY2xjawExIpJleHRuA2FlbQIxMAABHdP4QhUmFOxJLhIScEFgXQPlG11Z-SOcRbOhsYJ0iyMygB81euIktyb6EA_aem_BLfeZV9MJiDGbVNN7ab4oA',

        },
    },
];

const OurTeam = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="lg:text-3xl text-lg flex gap-4 justify-center my-10">
                <span className="font-bold">Meet</span>
                <span className="text-green-600">|</span>
                <span className="font-semibold">Our Team</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl glass"
                    >
                        <div className="absolute inset-0 pointer-events-none lg:block hidden">
                            <img
                                className="absolute opacity-20 hover:opacity-40 -left-0 -top-10 lg:-left-10 lg:-top-32 h-[500px] object-cover rotate-12 "
                                src={newIcctheme}
                                alt="ICC Theme"
                            />
                        </div>
                        <div className="relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-white glass backdrop-blur-md rounded-b-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                                {member.name}
                            </h3>
                            <p className="text-xl font-medium text-gray-700">{member.role}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                                </a>
                                <a href={member.social.whatsapp} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                                </a>
                                
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-colors duration-300" />
                                </a>
                                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-gray-900 hover:text-gray-700 transition-colors duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
