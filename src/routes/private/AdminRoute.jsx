import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  
    if (loading) {
      return <div>Loading...</div>; // or a loading spinner
    }
  
    if (!user || user.role !== "Admin") {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  
  export default AdminRoute;
  
 
  


