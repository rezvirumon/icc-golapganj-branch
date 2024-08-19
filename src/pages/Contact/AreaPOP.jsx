import React from 'react';
import { FaPhone } from 'react-icons/fa';


const AreaPOP = () => {
    const popLocations = [
        {
            name: "Arjunahar",
            manager: "Mrittun Joy Bormon",
            designation: "POP Manager",
            contact: {
                mobile: "+88 01767420892",
                whatsapp: "+88 01767420892",
            },
            description: "Oversees all operations and customer support for the Arjunahar area.",
            photo: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/449714760_971920181390734_6247186136399883883_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEju_elp3DeUz7fZnPH3kRlV7vvJE6yJGRXu-8kTrIkZMn6UvNJ_YzGMXeXgHpg4WRspM7KeqTH1jFTh_LHktYX&_nc_ohc=JTmapS90E1IQ7kNvgESWHFn&_nc_ht=scontent.fdac138-1.fna&oh=00_AYBLTl6lkkknE4gAmCGc8r_vUGhxTXglO3m9Nnaa4J8ovg&oe=66C958EB",
        },
        {
            name: "Nagorganj",
            manager: "Hafizur Rahman",
            designation: "POP Manager",
            contact: {
                mobile: "+0987654321",
                whatsapp: "+0987654321",
            },
            description: "Handles technical support and network maintenance in Nagorganj.",
            photo: "https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png",
        },
        {
            name: "Baladangi Bazar",
            manager: "Ziyaur Rahman",
            designation: "POP Manager",
            contact: {
                mobile: "+0987654321",
                whatsapp: "+0987654321",
            },
            description: "Handles technical support and network maintenance in Nagorganj.",
            photo: "https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png",
        },
        {
            name: "Baadlapara",
            manager: "Motiur Islam",
            designation: "Area Manager",
            contact: {
                mobile: "+0987654321",
                whatsapp: "+0987654321",
            },
            description: "Responsible for infrastructure and client installations in Baadlapara.",
            photo: "https://i.ibb.co/DMvmgvq/computer-icons-user-profile-clip-art-user-avatar-21c31463c33be747e38ba658e58821bb.png",
        },
        {
            name: "Sundori Hatgaass",
            manager: "Harun ur Rashid (Roissa)",
            designation: "POP Manager",
            contact: {
                mobile: "+1122334455",
                whatsapp: "+1122334455",
            },
            description: "Focuses on network optimization and customer service in Sundori Hatgaass.",
            photo: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/323132023_694328298855818_910382511493437277_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGH54ZyQql-zf8-dR8AKxopsz5OcCQZCSWzPk5wJBkJJYkyN1kGKN5jZ3jZApGHaoSY_I-m2Zgg3lPbHLhwkT4T&_nc_ohc=v_Xd6fB8CzgQ7kNvgF4Puw0&_nc_ht=scontent.fdac138-2.fna&oh=00_AYA9cL4RCe_HKIhqjXFL38igjywO1Z4E3N8-hzzKzu2Ddg&oe=66C97178",
        },
        {
            name: "Laaterhat",
            manager: "Rezaul Islam (Reza)",
            designation: "Area Manager",
            contact: {
                mobile: "+6677889900",
                whatsapp: "+6677889900",
            },
            description: "Handles field installations and repairs in Laaterhat.",
            photo: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/366686757_312333657921345_8842182311306248772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzasPEp9S0tqLkCW7gUdlOMDpRt5Dq620wOlG3kOrrbW5TnS7sKDGTOCjeTizuMF0sxqJD3m5gMOKykzyi6MQN&_nc_ohc=MABeLKWMOngQ7kNvgF7DL8u&_nc_ht=scontent.fdac138-2.fna&oh=00_AYAWPYGmoytHJUTvRJDYRiEuESAZNqaCj41fU5uMhmDFKQ&oe=66C97955",
        },
        {
            name: "Chouddohat",
            manager: "Nur Ajom Chowdhury (Sumon)",
            designation: "Area Manager",
            contact: {
                mobile: "+4433221100",
                whatsapp: "+4433221100",
            },
            description: "Leads the customer support team for the Chouddohat area.",
            photo: "https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/120301471_1304912429858390_827696802397803413_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGiLnYHeyW0goDqYRNeorEIe2ZTqERQ7JV7ZlOoRFDslfrojqpOzrsOEWGmsbIWHADAKX8FFq5qMLFBzycHLFKx&_nc_ohc=lM0r8Tezqg8Q7kNvgEYjr-l&_nc_ht=scontent.fdac138-1.fna&oh=00_AYBUx9b8cgYnpo-160XexDwLti2cwoHE1Adn-0d5FRNN3g&oe=66EB01EC",
        },
        {
            name: "Rajapukur",
            manager: "Moni Shankar Roy",
            designation: "POP Manager",
            contact: {
                mobile: "+4433221100",
                whatsapp: "+4433221100",
            },
            description: "Provides customer support and network troubleshooting in Rajapukur.",
            photo: "https://media-ccu1-2.cdn.whatsapp.net/v/t61.24694-24/370374779_234837172419846_3903928137517968906_n.jpg?ccb=11-4&oh=01_Q5AaIImWII26ypmMJjEV-fdmX3gqkdrYLgODVUIdNNCbfOkH&oe=66D09DE2&_nc_sid=5e03e0&_nc_cat=111",
        },
    ];

    return (
        <div className="my-10 px-4 lg:px-0">
        <div role="tablist" className="tabs tabs-lifted">
            {popLocations.map((location, index) => (
                <React.Fragment key={index}>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label={location.name} />
                    <div
                        role="tabpanel"
                        className="tab-content bg-base-100 "
                    >
                        <div className="bg-base-100 items-center shadow-xl flex flex-col lg:flex-row transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                            <figure className="flex-shrink-0">
                                <img
                                    className='w-48 h-48 lg:w-96 lg:h-96 object-cover p-3 rounded-full lg:rounded-lg'
                                    src={location.photo}
                                    alt={location.manager}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <span className='font-bold'>{location.manager}</span>
                                    <div className="badge badge-outline text-green-500 cursor-pointer ml-2">{location.name}</div>
                                </h2>
                                <p className="text-sm text-gray-500">{location.designation}</p>
                                <p>{location.description}</p>
                                <p><strong>Mobile:</strong> {location.contact.mobile}</p>
                                <p><strong>WhatsApp:</strong> {location.contact.whatsapp}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn w-full lg:w-auto flex items-center gap-2"><FaPhone /> Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
    );
};

export default AreaPOP;
