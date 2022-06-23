import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PracticeLinksCard from "./Components/PracticeLinks/PracticeLinksCard";

export function PracticeLinks(){
    return (
        <div>
            <NavBar/>
            <h2 className="page--header">Practice Links</h2>
                <div className="page--text">
                    <PracticeLinksCard/>
                    <PracticeLinksCard/>
                    <PracticeLinksCard/>
                    <PracticeLinksCard/>
                    <PracticeLinksCard/>
                    <Footer/>
                </div>
        </div>
    )
}
