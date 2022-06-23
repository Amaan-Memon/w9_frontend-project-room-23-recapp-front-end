import React from "react"; 
import NavBar from "./Components/NavBar/NavBar"
import ResourceCard from "./Components/ResourceCard/ResourceCard"
import Footer from "./Components/Footer/Footer"
import {useEffect, useState} from "react"

export function Content () {

  const [resources, setResources] = useState([]);

  useEffect(()=>{
    async function getResources(){
    const response = await fetch("http://localhost:5500/resources")
    let data = await response.json()
    console.log(data.payload)
    setResources(data.payload)
   

}
getResources()
}, [])

  return (
    <div>
      <NavBar/>
      <h1>Content</h1>
      <h3>Week 1</h3>
      <div>
        {
        resources.map(function (term) {
          return(
            <ResourceCard
            key={term.id}
            resourcesLink={term.link}
            resourcesTopic={term.topic}
            resourcesWeek={term.week}
            resourcesValue={term.value}
            />
          );
        })
      }
      </div>
      <Footer/>
    </div>
  );
}

