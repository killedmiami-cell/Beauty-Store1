import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuth, isAdmin } = useSelector((state) => state.auth);

  if (!isAuth || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}



