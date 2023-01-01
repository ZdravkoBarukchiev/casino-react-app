import { Routes, Route } from "react-router-dom";
import { Customer } from "./components/customer/Customer";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";
import { Promotins } from "./components/promotins/Promotins";
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
      </Routes>
    </div>
  );
}

export default App;
