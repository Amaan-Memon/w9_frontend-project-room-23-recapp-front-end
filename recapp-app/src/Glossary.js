import React from "react";
import Footer from "./Components/Footer/Footer";
import GlossaryCard from "./Components/GlossaryCard/GlossaryCard";
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

  const seen = []
  const alphabetical = (glossary || []).sort((a, b) => {
    return a.word.localeCompare(b.word);
 });
  return (
    <div>
      <h1 className="page--header">Glossary</h1>
      <div>
      {
        alphabetical.map(function (term) {
          if (seen.includes(term.word)) return
          seen.push(term.word)
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

