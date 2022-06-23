//Search Results page:
//1. NavBar
//2. 


import React, { useState, useEffect } from "react";
import ResourceCard from "./Components/ResourceCard/ResourceCard";
import Footer from "./Components/Footer/Footer";

export function SearchResults({userValue}) {
  const[results, setResults] = useState([]);

  useEffect(()=>{
    console.log(userValue);
    try {
      async function getData(){
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

  return (
    <div>
      <h2>Search Results:</h2>
      <h4>{`You searched for "${userValue}"...`}</h4>
      <div>
      {
        results.map(function (term) {
          return(
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
      <Footer/>
    </div>
  );
}
