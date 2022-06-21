import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from "../Landing";
import WeekContent from "../WeekContent";
import SearchResults from "../SearchResults";
import Glossary from "../Glossary";

function App() {
    return (
      <div className="App">
      
      <Routes>
        <Route path="/" component={Landing} />
        <Route path="/week" component={WeekContent} />
        <Route path="/search" component={SearchResults} />
        <Route path="/glossary" component={Glossary} />
      </Routes>
      
      </div>
    );
  }
  
  export default App;