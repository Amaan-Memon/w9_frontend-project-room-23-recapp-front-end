import React from "react"; 
import NavBar from "./Components/NavBar/NavBar"
import ResourceCard from "./Components/ResourceCard/ResourceCard"
import Footer from "./Components/Footer/Footer"
import {useEffect, useState} from "react"

export function Content () {

  const [resources, setResources] = useState([]);
  const [url, setUrl] = useState(`http://localhost:5500/resources/`)
  

  const handleClick = (i)=>{
    setUrl(`http://localhost:5500/resources/week/${i}`)
  }
  
  useEffect(()=>{
    async function getResources(){
    const response = await fetch(url)
    let data = await response.json()
    console.log(data.payload)
    setResources(data.payload)
   

}
getResources()
}, [url])
  
  return (
    <div>
      <NavBar/>
      <h1>Click on the week to see resources from... </h1>
      <button onClick={()=>{handleClick(1)}}>Week 1</button>
      <button onClick={()=>{handleClick(2)}}>Week 2</button>
      <button onClick={()=>{handleClick(3)}}>Week 3</button>
      <button onClick={()=>{handleClick(4)}}>Week 4</button>
      <button onClick={()=>{handleClick(5)}}>Week 5</button>
      <button onClick={()=>{handleClick(6)}}>Week 6</button>
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

