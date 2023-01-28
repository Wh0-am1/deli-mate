import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Admin from "./components/Admin/Admin";
import Business from "./components/Business/Business";
import Create from "./components/Create/Create";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Main from "./page/Main";
import Order from "./page/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Business/*" element={<Business />} />
        <Route path="/Admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
