import { Navbar } from "./components";
import { Features3js } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <div>
        <Features3js />
      </div>
    </div>
  );
}

export default App;
