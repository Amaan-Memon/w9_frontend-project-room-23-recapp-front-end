import { pool, query } from "../../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS glossary (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    word TEXT,
    description TEXT
);`;

async function createGlossaryTable () {
    const result = await query(sqlString);
    console.log("Created glossary table");
};

createGlossaryTable();

await pool.end();