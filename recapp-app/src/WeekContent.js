import React from "react"; 
import NavBar from "./Components/NavBar/NavBar"
import ResourceCard from "./Components/ResourceCard/ResourceCard"
import Footer from "./Components/Footer/Footer"


export function Content () {
  return (
    <div>
      <NavBar/>
      <h1>Content</h1>
      <h3>Week 1</h3>
      <div>
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
