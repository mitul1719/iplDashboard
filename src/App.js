import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel"
function App() {
  return (
    <div className="App"> // change the css here to remove centering of texts
      <Carousel />
      <h1>Upcoming matches</h1>
      {/* Render Table */}
    </div>
  );
}

export default App;
