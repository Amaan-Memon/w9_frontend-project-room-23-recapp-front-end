import React from "react";
import './App.css';
import { Routes, Link, Route } from "react-router-dom";
import {Landing} from "../Landing.js";
import {Content} from "../WeekContent.js";
import {SearchResults} from "../SearchResults.js";
import {Glossary} from "../Glossary.js";
import {PracticeLinks} from "../PracticeLinks.js"
function App() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/week" element={<Content/>} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/glossary" element={<Glossary/>} />
        <Route path="/practice-links" element={<PracticeLinks/>} />
      </Routes> 
    </div>
    );
  }
  
  export default App;