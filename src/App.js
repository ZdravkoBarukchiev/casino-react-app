import { Customer } from "./components/customer/Customer";
import { Footer } from "./components/footer/Footer";
import { Games } from "./components/games/Games";
import { Home } from "./components/homePage/Home";
import { Licens } from "./components/licens/Licens";
import { Reqeste } from "./components/reqeste/Reqeste";

function App() {
  return (
    <div className="App">
      <Home />
      <Games />
      <Licens />
      <Customer />
      <Reqeste />
      <Footer />
    </div>
  );
}

export default App;
