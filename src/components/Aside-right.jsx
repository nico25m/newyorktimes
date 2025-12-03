import { useState } from "react";


function AsideRight() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
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
    <div className="aside-right">
      <h1>Aside-right</h1>
    </div>
  );
}

export default AsideRight;
