import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useRole from "../../hook/useRole";

const PrivateAdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  const { userRole, isPending } = useRole();
  const runningUserRole = userRole?.userRole;

  if (loader || isPending) {
    return <p>loading...........</p>;
  }

  if (user && runningUserRole === "admin") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateAdminRoute;
