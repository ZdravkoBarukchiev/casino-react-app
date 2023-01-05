import { Routes, Route } from "react-router-dom";
import { Customers } from "./components/customers/Customers";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";
import { Promotins } from "./components/promotins/Promotins";
import { Register } from "./components/register/Register";
import { LoginContext } from "./context/loginContext";
import { useState } from "react";

function App() {
  const [loginData, setLoginData] = useState({});
  const userLogin = (userData) => {
    setLoginData(userData);
  };
  const userLogout = () => {
    setLoginData({});
  };
  return (
    <div className="App">
      <LoginContext.Provider value={{ loginData, userLogin, userLogout }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/licens" element={<Licens />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/promotins" element={<Promotins />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
