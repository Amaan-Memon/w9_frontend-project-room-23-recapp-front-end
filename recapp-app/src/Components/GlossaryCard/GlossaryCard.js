import React from "react";
import './GlossaryCard.css'


function GlossaryCard({ glossaryWord, glossaryDefinition }) {


    return (
        <div id="Glossary">
            <h3 className="glossary--word">{glossaryWord}</h3>
            <h4 className="glossary--definition">{glossaryDefinition}</h4>
        </div>
    )
}

export default GlossaryCard;