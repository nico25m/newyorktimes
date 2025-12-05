import TheNewYorkTimes from "../img/TheNewYorkTimesLogo.svg";

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
        <p className="data">{dataAggiornata}</p>
        <a href="App" className="title-link">
          <img
            src={TheNewYorkTimes}
            alt="The New York Times Logo"
            className="title-logo"
          />
        </a>
        <div className="container-btn">
          <button className="subscribe btn">Subscribe for €0.50/week</button>
          <button className="login btn">Log in</button>
        </div>
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
