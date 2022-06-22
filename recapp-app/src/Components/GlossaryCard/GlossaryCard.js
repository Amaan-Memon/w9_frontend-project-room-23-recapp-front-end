import React from "react";
import {useEffect, useState} from "react"

function GlossaryCard(){

    const [glossary, setGlossary] = useState([]);

    useEffect(()=>{
        async function getGlossary(){
        const response = await fetch("http://localhost:5500/glossary")
        let data = await response.json()

        console.log(data.payload[i])
        setGlossary(data)

    

    }
    getGlossary()
}, [])


    return(
        <div className="glossary--card">
            <h3>Word</h3>
            <h4>Definition</h4>
        </div>
    )
}

export default GlossaryCard;