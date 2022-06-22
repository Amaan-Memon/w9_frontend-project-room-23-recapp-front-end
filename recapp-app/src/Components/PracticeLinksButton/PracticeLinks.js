import React from "react";
import {useNavigate} from "react-router-dom";

function PracticeLinksButton() {
    const navigate = useNavigate()

    return (
        <div >
            <a href="">
                <button onClick = {()=>{navigate('/practice-links')}} className="glossary-button">Practice
                </button>
            </a>
        </div>
    );
}
export default PracticeLinksButton;