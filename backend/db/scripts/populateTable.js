import { pool, query } from "../index.js";

import { resources } from "../../libs/data.js";

async function populateTable() {
    for(let i = 0; i < resources.length; i++){
        const result = await query(
            `INSERT INTO resources(link, topic, week, tags, value, relevant) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
            [resources[i].link, resources[i].topic, resources[i].week, resources[i].tags, resources[i].value, resources[i].relevant]
        );
        console.log(`${resources[i].topic} added to DB`);
    }
}

populateTable();