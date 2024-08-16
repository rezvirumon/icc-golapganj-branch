import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../../components/shared/Loader";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  
    if (loading) {
      return <Loader></Loader>
    }
  
    if (!user || user.role !== "Admin") {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  
  export default AdminRoute;
  
 
  


