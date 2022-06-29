import './PracticeLinksButton.css'
import React from "react";
import { useNavigate } from "react-router-dom";

function PracticeLinksButton() {
    const navigate = useNavigate()

    return (
        <div >
            <a href="">
                <button onClick={() => { navigate('/practice-links') }} className="practice-links-button">Practice
                </button>
            </a>
        </div>
    );
}
export default PracticeLinksButton;