import TheNewYorkTimes from "../img/TheNewYorkTimesLogo.svg";
import burger from "../img/burger.png";

function Navbar() {
  const today = new Date();
  const dataAggiornata = today.toLocaleDateString("en-IT", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="navbar">
      <div className="container">
        <div className="menu-data">
          <button className="burger-btn" type="button">
            <img className="burger-menu" src={burger} alt=" " />
          </button>
          <p className="data">{dataAggiornata}</p>
          </div>
        <a href="App" className="title-link">
          <img
            src={TheNewYorkTimes}
            alt="The New York Times Logo"
            className="title-logo"
          />
        </a>
          <button className="login btn">Log in</button>
      </div>
      <div className="menu">
        <a className="link-menu" href=" ">U.S.</a>
        <a className="link-menu" href=" ">World</a>
        <a className="link-menu" href=" ">Business</a>
        <a className="link-menu" href=" ">Arts</a>
        <a className="link-menu" href=" ">Lifestyle</a>
        <a className="link-menu" href=" ">Opinion</a>
        <a className="link-menu" href=" ">Video</a>
        <a className="link-menu" href=" ">Audio</a>
        <a className="link-menu" href=" ">Games</a>
        <a className="link-menu" href=" ">Cooking</a>
        <a className="link-menu" href=" ">Wirecutter</a>
        <a className="link-menu" href=" ">The Athletic</a>
      </div>
    </div>
  );
}

export default Navbar;
