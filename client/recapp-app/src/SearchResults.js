//Search Results page:
//1. NavBar
//2. 


import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ResourceCard from "./Components/ResourceCard/ResourceCard";
import GlossaryCard from "./Components/GlossaryCard/GlossaryCard";
import Footer from "./Components/Footer/Footer";

export function SearchResults() {
  return (
    <div>
      <NavBar/>
      <h2>Search Results:</h2>
      <h4>You searched for "SearchResult"...</h4>
      <div>
        <GlossaryCard/>
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
