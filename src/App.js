import { Customer } from "./components/customer/Customer";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";

function App() {
  return (
    <div className="App">
      <Home />
      <Games />
      <Licens />
      <Customer />
    </div>
  );
}

export default App;
