import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const intendedPath = localStorage.getItem('intendedPath'); // Retrieve intended path from localStorage

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen ">
                <div className="text-center">
                   
                    <p className="mt-4 text-xl font-semibold text-gray-700">
                    
                    </p>
                </div>
            </div>
        );
    }

    if (!user) {
        // Store intended path before redirecting to login page
        localStorage.setItem('intendedPath', location.pathname);
        return <Navigate to='/login' replace={true} />;
    }

    // If user is logged in, render children
    return children;
};

export default PrivateRoute;