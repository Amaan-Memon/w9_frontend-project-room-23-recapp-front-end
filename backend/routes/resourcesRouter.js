import express from 'express';
import { getAllResources,
        getResourcesById,
        getSearchedResources,
        addResource,
        updateResource,
        deleteResource,
        getResourcesByWeek
    } from '../models/resourcesModels.js';

//Create a router
const resourcesRouter = express.Router();

//Get all resources
resourcesRouter.get("/", async function(req, res){
    console.log(`get request for `)
    const responseObject = {
        success: true,
        message: 'returned all Resources',
        payload: await getAllResources(),
    }
   res.status(200).json(responseObject);
})

// THIS WAS MESSING UP OUR GET BY SEARCH FUNCTION BY TAKING /SEARCH AS AN ID NUMBER
// Get resources by id
// resourcesRouter.get("/:id", async function(req, res){
//     const id = Number(req.params.id);
//     const responseObject = {
//         success: true,
//         message: `returned all resources with id ${id}`,
//         payload: await getResourcesById(id),
//     }
//    res.json(responseObject);
// })

// Get resources by week
resourcesRouter.get("/week/:num", async function(req, res){
    console.log(`get request for resources in week ${req.params.num}`)
    if( isNaN(req.params.num) ){
        console.log(`Error: ${req.params.num} is not a number!`)
       const responseObject = {
           success: false, 
           message: 'number is required'
       }
       res.status(400).json(responseObject)
       return;
    }
    console.log(`${req.params.num} is a number!`)
    const week = Number(req.params.num);
    const responseObject = {
        success: true,
        message: `returned all resources from week ${week}`,
        payload: await getResourcesByWeek(week),
    }
   res.status(200).json(responseObject);
})

//Get all items with tags = query
resourcesRouter.get("/search", async function(req, res){
    console.log(`GET request for resources containing tags matching- ${req.query.tags}`);
     const userInput = req.query.tags;
     const responseObject = {
         success: true,
         message: `returned all resources relevant to: ${userInput}`,
         payload: await getSearchedResources(userInput),
     }
    res.status(200).json(responseObject);
})

//Replace a resource by id
resourcesRouter.put("/:id", async function(req, res){
    const id = Number(req.params.id);
    const updatedResource = req.body;
    const responseObject = {
        success: true,
        payload: await updateResource(id, updatedResource),
    }
   res.status(200).json(responseObject);
})

//Add a new resource
resourcesRouter.post("/", async function(req, res){
    const newResource = req.body;
    console.log(req.body)
    const responseObject = {
        success: true,
        payload: await addResource(newResource),
    }
   res.status(200).json(responseObject);
})

//Delete a resource
resourcesRouter.delete("/:id", async function(req, res){
    const id = Number(req.params.id);
    const responseObject = {
        success: true,
        payload: await deleteResource(id),
    }
   res.status(200).json(responseObject);
})


export default resourcesRouter