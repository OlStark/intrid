import "./App.css";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters title={"Цена, р"} MIN={0} MAX={5000} />
    </div>
  );
}

export default App;
