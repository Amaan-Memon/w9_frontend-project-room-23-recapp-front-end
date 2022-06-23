import React from "react";
import {useEffect, useState} from "react"

function GlossaryCard(){

    const [glossaryWord, setGlossaryWord] = useState("");
    const [glossaryDeffinition, setGlossaryDeffinition] = useState("");

    useEffect(()=>{
        async function getGlossary(){
        const response = await fetch("http://localhost:5500/glossary")
        let data = await response.json()
        console.log(data.payload)
        setGlossaryWord(data.payload[0].word)
        setGlossaryDeffinition(data.payload[0].definition)

    }
    getGlossary()
}, [])


    return(
        <div className="glossary--card" id="Glossary">
            <h3>{glossaryWord}</h3>
            <h4>{glossaryDeffinition}</h4>
        </div>
    )
}

export default GlossaryCard;