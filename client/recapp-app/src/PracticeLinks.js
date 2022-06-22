import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PracticeLinksCard from "./Components/PracticeLinks/PracticeLinksCard";

export function PracticeLinks(){
    return (
        <div className="practice--links">
            <NavBar/>
            <h2>Practice Links</h2>
            <PracticeLinksCard/>
            <PracticeLinksCard/>
            <PracticeLinksCard/>
            <PracticeLinksCard/>
            <PracticeLinksCard/>
            <Footer/>
        </div>
    )
}
 