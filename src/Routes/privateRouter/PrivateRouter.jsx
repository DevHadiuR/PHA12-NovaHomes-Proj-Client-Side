import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useAuth();

  if (loader) {
    return <p>loading...........</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
