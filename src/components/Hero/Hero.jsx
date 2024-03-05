import "./hero.css";
import logo from "../../images/TVC-logo.png";

function Hero() {
  return (
    <section>
      <img src={logo} alt="website logo" className="logo"/>
    </section>
  );
}

export default Hero;
