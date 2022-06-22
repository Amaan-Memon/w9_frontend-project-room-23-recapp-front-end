import {query, pool } from '../db/index.js';

//GET ALL GLOSSARY TERMS 
export async function getAllGlossaryTerms(){
    const res = await pool.query(`SELECT * FROM glossary ORDER BY id ASC;`)
    return res.rows;
}

//GET GLOSSARY TERMS BY ID
export async function getGlossaryById(id){
    const res = await pool.query(`SELECT * FROM glossary WHERE id = ($1);`, [id])
    return res.rows;
}

//ADD A GLOSSARY TERM
export async function addGlossaryTerm(newGlossaryTerm) {
    console.log(newGlossaryTerm)
    const res = await pool.query(`INSERT INTO glossary (word, definition) VALUES ($1, $2) RETURNING *;`, [newGlossaryTerm.word, newGlossaryTerm.definition]);
    console.log(`new glossary term added, ${JSON.stringify(res.rows)}`);
    return res.rows;
  }
  
  //UPDATE (PUT) A GLOSSARY TERM
  export async function updateGlossaryTerm(id, updatedGlossaryTerm) {
    const res = await query(
    `UPDATE glossary 
    SET word =($1), 
    definition=($2)
    WHERE id=(${id}) RETURNING*;`,
    [updatedGlossaryTerm.word , updatedGlossaryTerm.definition]
    );
    console.log(`glossary term updated: ${JSON.stringify(res.rows)}`)
    return res.rows;
  }
  
  //DELETE A GLOSSARY TERM
  export async function deleteGlossaryTerm(id) {
      const res = await query(`DELETE FROM glossary 
      WHERE id=(${id}) RETURNING*;`);
      console.log(`glossary term deleted: ${JSON.stringify(res.rows)}`)
      return res.rows;
    }

