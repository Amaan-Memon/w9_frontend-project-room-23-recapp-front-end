import React from "react";
import Footer from "./Components/Footer/Footer";
import GlossaryCard from "./Components/GlossaryCard/GlossaryCard";
import NavBar from "./Components/NavBar/NavBar";
import {useEffect, useState} from "react"


export function Glossary () {

  const [glossary, setGlossary] = useState([]);
  

  useEffect(()=>{
      async function getGlossary(){
      const response = await fetch("http://localhost:5500/glossary")
      let data = await response.json()
      console.log(data.payload)
      setGlossary(data.payload)
     

  }
  getGlossary()
}, [])

  return (
    <div>
      <NavBar/>
      <h1>Glossary</h1>
      <div>
      {
        glossary.map(function (term) {
          return(
            <GlossaryCard
            key={term.id}
            glossaryWord={term.word}
            glossaryDefinition={term.definition}
            />
          );
        })
      }
      </div>
      <Footer/>
    </div>
  );
}

