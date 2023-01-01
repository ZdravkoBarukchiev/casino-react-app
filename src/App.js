import { Routes, Route } from "react-router-dom";
import { Customers } from "./components/customers/Customers";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";
import { Login } from "./components/login/Login";
import { Promotins } from "./components/promotins/Promotins";
import { Register } from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/licens" element={<Licens />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/promotins" element={<Promotins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
