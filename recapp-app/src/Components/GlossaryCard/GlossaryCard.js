import React from "react";


function GlossaryCard({ glossaryWord, glossaryDefinition }){


    return(
        <div className="glossary--card" id="Glossary">
            <h3>{glossaryWord}</h3>
            <h4>{glossaryDefinition}</h4>
        </div>
    )
}

export default GlossaryCard;