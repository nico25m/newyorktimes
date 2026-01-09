import { useState, useEffect } from "react";

export const Movie = () => {
 const [movie, setMovie] = useState([]);

  async function getMovie() {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
      );
      const data = await response.json();

      const movie = data.response.docs;

      setMovie(movie.slice(0, 16));
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
      <div className="movie">
        <div className="list">
          {movie.map((movie) => (
            <div className="item" key={movie._id}>
              <h3 className="h">{movie.headline.main || "Headline not avaible"}</h3>
              <p className="description">{movie.snippet || "Snippet not available"}</p>   
              <p className="credit">{movie.multimedia.credit || "Credit not available"}</p>
            </div>
          ))}
        </div>
      </div>
  );
};