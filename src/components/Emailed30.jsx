import { useState, useEffect } from "react";

function Emailed30() {
  const [emailed, setEmailed] = useState([]);

  async function getEmailed() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
      );

      const data = await response.json();

      const emailed = data.results;

      setEmailed(emailed.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEmailed();
  }, []);

  return (
    <div className="emailed30">
      <div className="emailed-list">
        {emailed.map((emailed) => (
          <div className="emailed-item" key={emailed._id}>
            <h3 className="h-emailed">{emailed.title || "Title not avaible"}</h3>
            <p className="description-emailed">{emailed.abstract || "Abstract not available"}</p>
            <img
              className="img-emailed"
              src={emailed.media[0]["media-metadata"][2].url || ""}
              alt={emailed.media[0].caption || "Description not available"}
            />
            <p className="credit-emailed">{emailed.media[0].copyright || "Credit not available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emailed30;
