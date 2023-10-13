import "./App.css";
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Filters />
        <Cards />
      </main>
    </div>
  );
}

export default App;
