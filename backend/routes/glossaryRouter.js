import express from "express";

import {
  getGlossaryById,
  getAllGlossaryTerms,
  addGlossaryTerm,
  updateGlossaryTerm,
  deleteGlossaryTerm,
} from "../models/glossaryModels.js";

//ROUTER FOR /GLOSSARY
const glossaryRouter = express.Router();

//GET ALL GLOSSARY TERMS
glossaryRouter.get("/", async function (req, res) {
    console.log("GET request for all glossary items")
  const responseObject = {
    success: true,
    message: "returned all Glossary terms",
    payload: await getAllGlossaryTerms(),
  };
  res.status(200).json(responseObject);
});

// GET TERM BY ID
glossaryRouter.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  console.log(`GET request for glossary term with id of ${id}`)
  const responseObject = {
    success: true,
    message: "returned item with ${id}",
    payload: await getGlossaryById(id),
  };
  res.status(200).json(responseObject);
});

//REPLACE A GLOSSARY TERM BY ID
glossaryRouter.put("/:id", async function (req, res) {
    const id = Number(req.params.id);
    console.log(`PUT request for glossary term with id of ${id}`)  
  const updatedGlossary = req.body;
  const responseObject = {
    success: true,
    message: "returned all Glossary terms",
    payload: await updateGlossaryTerm(id, updatedGlossary),
  };
  res.status(200).json(responseObject);
});

//ADD A NEW GLOSSARY TERM
glossaryRouter.post("/", async function (req, res) {
  const newGlossaryTerm = req.body;
  console.log(`POST request for new glossary term : ${JSON.stringify(newGlossaryTerm)}`);
  const responseObject = {
    success: true,
    message: `added new glossary term: ${JSON.stringify(newGlossaryTerm)}`,
    payload: await addGlossaryTerm(newGlossaryTerm),
  };
  res.status(200).json(responseObject);
});

//DELETE A GLOSSARY TERM
glossaryRouter.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  console.log(`DELETE request for glossary term with id of ${id}`)
  const responseObject = {
    success: true,
    message: `glossary term deleted with id of ${id}`,
    payload: await deleteGlossaryTerm(id),
  };
  res.status(200).json(responseObject);
});

export default glossaryRouter;
