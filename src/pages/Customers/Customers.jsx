import { useAuth } from '../../hooks/useAuth';
import CreateTicket from './MikroTikUsers/CreateTicket';
import MikroTik from './MikroTikUsers/MikroTik';

const Customers = () => {
    const { user } = useAuth();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
                <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 lg:flex gap-5 items-center">
                    {user.photoURL && (
                        <img 
                            src={user.photoURL} 
                            alt="User Photo" 
                            className="w-64 shadow-lg p-3 rounded-lg object-cover" 
                        />
                    )}
                    <div>
                        <p className="text-gray-700 text-xl font-semibold">Name: {user.displayName}</p>
                        <p className="text-gray-700 text-xl font-semibold">Email: {user.email}</p>
                    </div>
                </div>
            ) : (
                <p className="text-red-500">No user is logged in.</p>
            )}

            <div className="mt-8">
                <MikroTik />
                <CreateTicket />
            </div>
        </div>
    );
};

export default Customers;
