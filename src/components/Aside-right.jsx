import { useState, useEffect } from "react";

function AsideRight() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
      );

      const data = await response.json();

      const emailed = data.results;

      setNews(emailed.slice(0, 5));
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="aside-right">
      <h1>Aside-right</h1>
      <div className="news-list">
        {news.map((emailed) => (
          <div className="news-item" key={emailed._id}>
            <h3>{emailed.title || "Title not avaible"}</h3>
            {/* <p>{emailed.media[0].copyright || "Credit not available"}</p>
            <img
              src={emailed.media[0]["media-metadata"][1].url || ""}
              alt={emailed.media[0].caption || "Description not available"}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsideRight;
