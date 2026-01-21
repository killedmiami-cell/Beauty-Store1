import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAdmin = useSelector(s => s.auth.isAdmin);
  return isAdmin ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;




