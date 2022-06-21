import React from "react";
import './App.css';
import Navbar from "./components/Navbar";

function Recapp() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Weeks" exact component={Weeks} />
          <Route path="/Glossary" component={Glossary} />
          <Route path="/SearchResult" component={SearchResult} />
          
        </Switch>
      </Router>
    );
  }
  
  export default Recapp;