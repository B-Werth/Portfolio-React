import { Navbar } from "./components";
import { Header } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
