import TheNewYorkTimes from "../img/TheNewYorkTimesLogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src={TheNewYorkTimes} alt="logo" />
      <div className="container-foot">
        <div className="footer-menu">
          <Link className="link-footer" to="/">
            <h4>HOME</h4>
          </Link>

          <Link className="link-footer" to="/news">
            <h4>NEWS</h4>
          </Link>

          <Link className="link-footer" to="/election">
            <h4>ELECTION</h4>
          </Link>

          <Link className="link-footer" to="/movie">
            <h4>MOVIE</h4>
          </Link>

          <Link className="link-footer" to="/oldnews">
            <h4>OLD NEWS</h4>
          </Link>
        </div>

        <div className="aside-footer">
          <h4>ACCOUNT</h4>
          <p>Subscribe</p>
          <p>Manage My Account</p>
          <p>Home Delivery</p>
          <p>Gift Subscriptions</p>
        </div>
      </div>
      <p className="copyright-footer">© 2025 Nicolò Melzi</p>
    </div>
  );
}

export default Footer;
