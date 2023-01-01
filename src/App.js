import { Routes, Route } from "react-router-dom";
import { Customer } from "./components/customer/Customer";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";
import { Login } from "./components/login/Login";
import { Promotins } from "./components/promotins/Promotins";
import { Register } from "./components/register/Register";
import { Reqeste } from "./components/reqeste/Reqeste";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/licens" element={<Licens />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/reqeste" element={<Reqeste />} />
        <Route path="/promotins" element={<Promotins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
