import "./hero.css";
import logo from "../../images/TVC-logo.png";

export function Hero() {
  return (
    <section>
      <img src={logo} alt="website logo" className="logo" />
      <h3>Bridging The Gap, Humanising Social Work</h3>
    </section>
  );
}
