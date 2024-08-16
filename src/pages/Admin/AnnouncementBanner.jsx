import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import icctheme from '../../assets/resource/icc-theme.png';


const AnnouncementBanner = () => {
    const [announcement, setAnnouncement] = useState(null);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch('https://icc-golapganj-server.vercel.app/api/announcements');
                const data = await response.json();
                setAnnouncement(data[data.length - 1]); // Show the latest announcement
            } catch (error) {
                console.error('Error fetching announcement:', error.message);
            }
        };

        fetchAnnouncement();
    }, []);

    if (!announcement) return null;

    return (
        <div className="my-5 glass shadow-xl">
            <Marquee gradient={false} speed={50}>

                <div className='flex items-center gap-5 text-green-700 '>
                    <img className='w-24' src={icctheme} alt=""/>
                    <h3 className="text-2xl font-bold">{announcement.title}</h3> | 
                    <div className='text-2xl'>
                        <span>{announcement.message} | </span> Event Start Date: <span> {new Date(announcement.date).toLocaleDateString()}</span>
                    </div>
                    <img className='w-24 rotate-180' src={icctheme} alt=""/>

                </div>

            </Marquee>
        </div>
    );
};

export default AnnouncementBanner;
