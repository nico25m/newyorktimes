import { useState, useEffect } from "react";

export const Election = () => {
    const [election, setElection] = useState([]);
    
      async function getElection() {
        try {
          const response = await fetch(
            "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Uno3dLRvjqjGCdGhqv7A4FycXdrHnHE"
          );
          const data = await response.json();
    
          const election = data.response.docs;
    
          setElection(election.slice(0, 16));
          
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        getElection();
      }, []);
    
      return (
          <div className="election">
            <div className="list">
              {election.map((election) => (
                <div className="election item" key={election._id}>
                  <h3 className="h">{election.headline.main || "Headline not avaible"}</h3>
                  <p className="description">{election.snippet || "Snippet not available"}</p>
                  <p className="credit">{election.multimedia.credit || "Credit not available"}</p>
                </div>
              ))}
            </div>
          </div>
      );
};