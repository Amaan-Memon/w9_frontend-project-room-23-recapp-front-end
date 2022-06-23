import React from "react"; 
import NavBar from "./Components/NavBar/NavBar"
import ResourceCard from "./Components/ResourceCard/ResourceCard"
import Footer from "./Components/Footer/Footer"


export function Content () {
  return (
    <div>
      <NavBar/>
      <h1 className="page--header">Week 1</h1>
      <div className="page--text">
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
      </div>
      <Footer/>
    </div>
  );
}
