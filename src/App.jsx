import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Admin from "./components/Admin/Admin";
import Business from "./components/Business/Business";
import Create from "./components/Create/Create";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Main from "./page/Main";
import Order from "./page/Order";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Create" element={<Create />} />
          <Route
            path="/Home/*"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/Order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="/Account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path="/Business/*"
            element={
              <PrivateRoute>
                <Business />
              </PrivateRoute>
            }
          />
          <Route
            path="/Admin/*"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
