import {query, pool } from '../db/index.js';

//THIS FILE IS NOT IN USE

//GET ALL ITEM FROM BOTH TABLES 
export async function getAllItems(){
    const res = await pool.query(`SELECT * FROM glossary ORDER BY id ASC;`)
    return res.rows
}