import { pool, query } from "../../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS resources (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    link TEXT,
    topic TEXT,
    week INT,
    tags TEXT,
    value INT,
    relevant BOOL
);`;

async function createResourcesTable () {
    const result = await query(sqlString);
    console.log("Created resources table");
};

createResourcesTable();

await pool.end();