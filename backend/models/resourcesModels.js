import {query, pool } from '../db/index.js';

//GET ALL RESOURCES 
export async function getAllResources(){
    const res = await pool.query(`SELECT * FROM resources ORDER BY id ASC;`)
    return res.rows
}

//GET RESOURCES BY ID
export async function getResourcesById(id){
    const res = await pool.query(`SELECT * FROM resources WHERE id = ($1);`, [id])
    return res.rows
}

//GET RESOURCES BY WEEK
export async function getResourcesByWeek(week){
    const res = await pool.query(`SELECT * FROM resources WHERE week = ($1);`, [week])
    return res.rows
}

//GET RESOURCES BY SEARCH
export async function getSearchedResources(userInput){
    if(userInput === null){
        return "Search result does not exist"
    }
    userInput = userInput.replace(/[^0-9a-z]/gi, '')
    console.log(`Search for ${userInput}`)
    const res = await pool.query(`SELECT * FROM resources WHERE tags LIKE '%${userInput}%'`)
    for (let i = 0 ; i < res.rows.length ; i++){
    console.log(`returned resource matching search: ${JSON.stringify(res.rows[i].link)}`)
    }
    return res.rows
}

//ADD (POST) A RESOURCE
export async function addResource(newResource) {
    console.log(newResource)
    const res = await pool.query(`INSERT INTO resources (link, topic, week, tags, value, relevant) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [newResource.link, newResource.topic, newResource.week, newResource.tags, newResource.value, newResource.relevant]);
    console.log("new resource added", res.rows);
    return res.rows;
  }
  
  //UPDATE (PUT) A RESOURCE
  export async function updateResource(id, updatedResource) {
    const res = await query(
    `UPDATE resources 
    SET link =($1), 
    topic =($2),
    week = ($3),
    tags = ($4),
    value = ($5),
    relevant = ($6)
    WHERE id=(${id}) RETURNING*;`,
    [updatedResource.link , updatedResource.topic, updatedResource.week, updatedResource.tags, updatedResource.value, updatedResource.relevant]
    );
    console.log(`resource updated: ${res.rows}`)
    return res.rows;
  }
  
  //DELETE A RESOURCE
  export async function deleteResource(id) {
      const res = await query(`DELETE FROM resources 
      WHERE id=(${id}) RETURNING*;`);
      console.log(`resource deleted: ${res.rows}`)
      return res.rows;
    }
