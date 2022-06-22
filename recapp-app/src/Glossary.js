import React from "react";
import Footer from "./Components/Footer/Footer";
import GlossaryCard from "./Components/GlossaryCard/GlossaryCard";
import NavBar from "./Components/NavBar/NavBar";


export function Glossary () {
  return (
    <div>
      <NavBar/>
      <h1>Glossary</h1>
      <div>
      <GlossaryCard/>
      <GlossaryCard/>
      <GlossaryCard/>
      <GlossaryCard/>
      <GlossaryCard/>
      <GlossaryCard/> 
      </div>
      <Footer/>
    </div>
  );
}

