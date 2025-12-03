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
      <p className="data">{dataAggiornata}</p>
      <a href="http://localhost:3000" className="title-link">
        <img
          src={TheNewYorkTimes}
          alt="The New York Times Logo"
          className="title-logo"
        />
      </a>
      <div className="container-btn">
        <button className="subscribe btn">Subscribe</button>
        <button className="login btn">Log in</button>
      </div>
    </div>
  );
}

export default Navbar;
