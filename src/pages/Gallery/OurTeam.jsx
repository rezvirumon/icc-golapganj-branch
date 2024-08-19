import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import newIcctheme from '../../assets/resource/icc-theme.png';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Front-end Developer',
        image: 'https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png',
        social: {
            facebook: 'https://facebook.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
        },
    },
    {
        name: 'Jane Smith',
        role: 'Back-end Developer',
        image: 'https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png',
        social: {
            facebook: 'https://facebook.com/janesmith',
            twitter: 'https://twitter.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith',
            github: 'https://github.com/janesmith',
        },
    },
    {
        name: 'Emily Johnson',
        role: 'UI/UX Designer',
        image: 'https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png',
        social: {
            facebook: 'https://facebook.com/emilyjohnson',
            twitter: 'https://twitter.com/emilyjohnson',
            linkedin: 'https://linkedin.com/in/emilyjohnson',
            github: 'https://github.com/emilyjohnson',
        },
    },
    {
        name: 'Michael Brown',
        role: 'Project Manager',
        image: 'https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png',
        social: {
            facebook: 'https://facebook.com/michaelbrown',
            twitter: 'https://twitter.com/michaelbrown',
            linkedin: 'https://linkedin.com/in/michaelbrown',
            github: 'https://github.com/michaelbrown',
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
                            <p className="text-lg font-medium text-gray-700">{member.role}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                                </a>
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-blue-400 hover:text-blue-600 transition-colors duration-300" />
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
