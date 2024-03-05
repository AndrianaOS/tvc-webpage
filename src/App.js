import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Quotes } from "./components/Quotes/Quotes";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Quotes />
    </div>
  );
}

export default App;
