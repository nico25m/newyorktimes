import TheNewYorkTimes from "../img/TheNewYorkTimesLogo.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src={TheNewYorkTimes} alt=" " />
      <div className="container-foot">
        <div className="footer-menu">
          <div className="news">
            <h4>NEWS</h4>
            <p>Home Page</p>
            <p>U.S.</p>
            <p>World</p>
            <p>Politics</p>
            <p>New York</p>
            <p>Education</p>
            <p>Sports</p>
            <p>Business</p>
            <p>Tech</p>
            <p>Science</p>
            <p>Weather</p>
            <p>The Great Read</p>
            <p>Obituaries</p>
            <p>Headway</p>
            <p>Visual Investigations</p>
            <p>The Magazine</p>
          </div>

          <div className="arts">
            <h4>ARTS</h4>
            <p>Book Review</p>
            <p>Best Sellers Book List</p>
            <p>Dance</p>
            <p>Movies</p>
            <p>Music</p>
            <p>Pop Culture</p>
            <p>Television</p>
            <p>Theater</p>
            <p>Visual Arts</p>
          </div>

          <div className="lifestyle">
            <h4>LIFESTYLE</h4>
            <p>Health</p>
            <p>Well</p>
            <p>Food</p>
            <p>Restaurant Reviews</p>
            <p>Love</p>
            <p>Travel</p>
            <p>Style</p>
            <p>Fashion</p>
            <p>Real Estate</p>
            <p>T Magazine</p>
          </div>

          <div className="opinion">
            <h4>OPINION</h4>
            <p>Today's Opinion</p>
            <p>Columnists</p>
            <p>Editorials</p>
            <p>Guest Essays</p>
            <p>Op-Docs</p>
            <p>Letters</p>
            <p>Sunday Opinion</p>
            <p>Opinion Video</p>
            <p>Opinion Audio</p>
          </div>

          <div className="more">
            <h4>MORE</h4>
            <p>Audio</p>
            <p>Games</p>
            <p>Cooking</p>
            <p>Wirecutter</p>
            <p>The Athletic</p>
            <p>Jobs</p>
            <p>Video</p>
            <p>Graphics</p>
            <p>Trending</p>
            <p>Live Events</p>
            <p>Corrections</p>
            <p>Reader Center</p>
            <p>TimesMachine</p>
            <p>The Learning Network</p>
            <p>School of The NYT</p>
            <p>inEducation</p>
          </div>
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
