import "./footer.css";
import blog from "../../images/blogging.png";
import insta from "../../images/instagram.png";
import love from "../../images/heart.png";

export function Footer() {
  return (
    <footer>
      <h3>The Village Consult</h3>
      <aside className="footer-info">
        Made with{" "}
        <span>
          <a href="https://cv-portfolio.onrender.com/">
            <img src={love} alt="heart" className="icons" />
          </a>
        </span>{" "}
        by{" "}
        <a
          href="https://cv-portfolio.onrender.com/"
          id="maker"
          className="links"
        >
          Andriana
        </a>
      </aside>
      <aside className="footer-info">
        <a href="https://tvc312.wordpress.com/">
          <img src={blog} alt="blog" className="icons" />
        </a>{" "}
        Visit our
        <a href="https://tvc312.wordpress.com/" className="links">
          Blog
        </a>
      </aside>
      <aside className="footer-info">
        <a href="https://www.instagram.com/_tvc312/">
          <img src={insta} alt="instagram" className="icons" />
        </a>
        Join us on{" "}
        <a href="https://www.instagram.com/_tvc312/" className="links">
          Instagram
        </a>
      </aside>
    </footer>
  );
}
