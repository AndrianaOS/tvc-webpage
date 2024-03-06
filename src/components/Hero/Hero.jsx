import "./hero.css";
import logo from "../../images/TVC-logo.png";

export function Hero() {
  return (
    <section className="hero-section">
      <img src={logo} alt="website logo" className="logo" />
      <h3>Bridging The Gap, Humanising Social Work</h3>
    </section>
  );
}
