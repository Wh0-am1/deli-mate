import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" replace={true} />;
  }

  // authorized so return child components
  return children;
}
