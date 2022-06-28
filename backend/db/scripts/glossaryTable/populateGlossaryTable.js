import { pool, query } from "../../index.js";

import { glossary } from "../../../libs/data.js";

async function populateGlossaryTable() {
    for(let i = 0; i < glossary.length; i++){
        const result = await query(
            `INSERT INTO resources(word, description) VALUES ($1, $2) RETURNING *;`,
            [glossary[i].word, glossary[i].description]
        );
        console.log(`${glossary[i].word} added to DB`);
    }
}

populateGlossaryTable();