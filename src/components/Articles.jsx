import { useState, useEffect } from "react";

function Articles() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
      );
      const data = await response.json();

      const articles = data.response.docs;

      setNews(articles.slice(0, 10));
      
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="article">
      <div id="news" className="news">
        <h1>News</h1>
        <div className="news-list">
          {news.map((article) => (
            <div className="news-item" key={article._id}>
              <h3>{article.headline.main || "Headline not avaible"}</h3>
              <p>{article.multimedia.credit || "Credit not available"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
