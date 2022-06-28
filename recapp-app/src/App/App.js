import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {Landing} from "../Landing.js";
import {Content} from "../WeekContent.js";
import {SearchResults} from "../SearchResults.js";
import {Glossary} from "../Glossary.js";
import {PracticeLinks} from "../PracticeLinks.js"
import NavBar from "../Components/NavBar/NavBar";

function App() {
  const [userValue, setUserValue] = useState('')
    return (
    <div className="App">
        <NavBar setUserValue = {setUserValue}/>
      <Routes>
        <Route path="/" element={<Landing/>}  id= "landing"/>
        <Route path="/week" element={<Content/>} />
        <Route path="/search" element={<SearchResults userValue = {userValue}/>} />
        <Route path="/glossary" element={<Glossary/>} />
        <Route path="/practice-links" element={<PracticeLinks/>} />
      </Routes> 
    </div>
    );
  }
  
  export default App;