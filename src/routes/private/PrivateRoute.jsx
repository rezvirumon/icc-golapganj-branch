import { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loader from "../../components/shared/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const intendedPath = localStorage.getItem('intendedPath'); // Retrieve intended path from localStorage

    useEffect(() => {
        if (user && intendedPath) {
            localStorage.removeItem('intendedPath'); // Clear intended path from localStorage
            navigate(intendedPath); // Redirect to intended path
        }
    }, [user, intendedPath, navigate]);

    if (loading) {
        return (
            <div className="">
                <div className="text-center">
                    <Loader></Loader>
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
