//Search Results page:
//1. NavBar
//2. useEffect to fetch the results of the search from the
//   API using map with 'term' as the props being passed 
//   within the Resource Card component 


import React, { useState, useEffect } from "react";
import ResourceCard from "./Components/ResourceCard/ResourceCard";
import Footer from "./Components/Footer/Footer";

export function SearchResults({ userValue }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log(userValue);
    try {
      async function getData() {
        const response = await fetch(`http://localhost:5500/resources/search?tags=${userValue}`);
        const data = await response.json();
        // console.log(actualData)
        // console.log(url)
        setResults(data.payload)
        console.log(data)
      }
      getData();
    } catch (error) {

    }
  }, [userValue]);

  const seen = []
  return (
    <div>
      {/* <NavBar/> */}
      <h2 className="page--header">Search Results:</h2>
      <h4 className="page--text">You searched for "{userValue}"...</h4>
      <div>
        {
          results.map(function (term) {
            if (seen.includes(term.topic + term.week)) return
            seen.push(term.topic + term.week)
            return (
              <ResourceCard
                key={term.id}
                resourcesLink={term.link}
                resourcesTopic={term.topic}
                resourcesWeek={term.week}
                resourcesValue={term.value}
                resourcesImage={term.images}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
}
