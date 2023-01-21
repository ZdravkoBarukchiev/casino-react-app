import { Routes, Route } from "react-router-dom";
import { Customers } from "./components/Customers/Customers";
import { Games } from "./components/Games/Games";
import { Home } from "./components/Home/Home";
import { Licens } from "./components/Licens/Licens";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Promotins } from "./components/Promotins/Promotins";
import { Register } from "./components/Register/Register";
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
