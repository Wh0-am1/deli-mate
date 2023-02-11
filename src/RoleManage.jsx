import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function RoleManage({ children, r }) {
  const { role } = useAuth();

  if (role.current === r) {
    return children;
  } else return <Navigate to="/Home" />;
}

export default RoleManage;
