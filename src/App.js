import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Quotes } from "./components/Quotes/Quotes.jsx";
import {About} from "./components/About/About.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <div id="spacer"></div>
      <Hero />
      <Quotes />
      <About/>
    </div>
  );
}

export default App;
