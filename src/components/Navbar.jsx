import { Link } from "react-router-dom";
import { useState } from "react";
import TheNewYorkTimes from "../img/TheNewYorkTimesLogo.svg";
import burger from "../img/burger.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date();
  const dataAggiornata = today.toLocaleDateString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="navbar">
      <div className="container">
        <div className="menu-data">
          <button
            className="burger-btn"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img className="burger-img" src={burger} alt="menu" />
          </button>

          <p className="data">{dataAggiornata}</p>
        </div>

        <a href="/" className="title-link">
          <img
            src={TheNewYorkTimes}
            alt="The New York Times Logo"
            className="title-logo"
          />
        </a>

        <button className="login btn">Log in</button>
      </div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link className="link-menu" to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          className="link-menu"
          to="/news"
          onClick={() => setMenuOpen(false)}
        >
          News
        </Link>
        <Link
          className="link-menu"
          to="/election"
          onClick={() => setMenuOpen(false)}
        >
          Election
        </Link>
        <Link
          className="link-menu"
          to="/movie"
          onClick={() => setMenuOpen(false)}
        >
          Movie
        </Link>
        <Link
          className="link-menu"
          to="/oldnews"
          onClick={() => setMenuOpen(false)}
        >
          Old News
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
