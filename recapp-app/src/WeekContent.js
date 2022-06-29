//Weeks Content page:
//1. NavBar
//2. useEffect to fetch the results of the search from the
//   API using map with 'term' as the props being passed
//   within the Resource Card component

import React, { useEffect, useState } from "react";
import ResourceCard from "./Components/ResourceCard/ResourceCard";
import Footer from "./Components/Footer/Footer";

export function Content() {
  const [resources, setResources] = useState([]);
  const [url, setUrl] = useState(`http://localhost:5500/resources/`);

  const handleClick = (i) => {
    setUrl(`http://localhost:5500/resources/week/${i}`);
  };

  useEffect(() => {
    async function getResources() {
      const response = await fetch(url);
      let data = await response.json();
      console.log(data.payload);
      setResources(data.payload);
    }
    getResources();
  }, [url]);

  const seen = [];
  return (
    <div>
      <h1 className="page--header">
        Click on the week to see resources from...{" "}
      </h1>
      <button
        className="week--button"
        onClick={() => {
          handleClick(1);
        }}
      >
        Week 1
      </button>
      <button
        className="week--button"
        onClick={() => {
          handleClick(2);
        }}
      >
        Week 2
      </button>
      <button
        className="week--button"
        onClick={() => {
          handleClick(3);
        }}
      >
        Week 3
      </button>
      <button
        className="week--button"
        onClick={() => {
          handleClick(4);
        }}
      >
        Week 4
      </button>
      <button
        className="week--button"
        onClick={() => {
          handleClick(5);
        }}
      >
        Week 5
      </button>
      <button
        className="week--button"
        onClick={() => {
          handleClick(6);
        }}
      >
        Week 6
      </button>
      <div>
        {resources.map(function (term) {
          if(seen.includes(term.topic + term.week)){
          return seen.push(term.topic + term.week)};
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
        })}
      </div>
      <Footer />
    </div>
  );
}
