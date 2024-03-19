import "./footer.css";
import blog from "../../images/blogging.webp";
import insta from "../../images/instagram.webp";
import love from "../../images/heart.webp";

export function Footer() {
  return (
    <footer>
      <h3 id="page-name">The Village Consult</h3>
      <aside className="footer-info" id="maker">
        Made with{" "}
        <span>
          <a href="https://www.linkedin.com/in/andriana-saffo/">
            <img src={love} alt="heart" className="icons" />
          </a>
        </span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/andriana-saffo/"
          id="maker"
          className="links"
        >
          Andriana
        </a>
      </aside>
      <aside className="footer-info" id="blog">
        <a href="https://tvc312.wordpress.com/">
          <img src={blog} alt="blog" className="icons" />
        </a>{" "}
        Visit our
        <a href="https://tvc312.wordpress.com/" className="links">
          Blog
        </a>
      </aside>
      <aside className="footer-info" id="insta">
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
