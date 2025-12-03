import { useState } from "react";

function Main() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
      );

      const data = await response.json();

      const articles = data.response.docs;

      // Prendiamo solo le prime 20 per non far esplodere tutto
      setNews(articles.slice(0, 20));

    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  }

  return (
    <div className="main">
      <div className="news">
        <h1>News</h1>

        <button onClick={getNews}>Get news</button>

        <div className="news-list">
          {news.map((article) => (
            <div className="news-item" key={article._id}>
              <h3>{article.headline.main}</h3>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Main;
