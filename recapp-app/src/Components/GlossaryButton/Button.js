import React from "react";
import './Button.css'
import { useNavigate } from "react-router-dom";

function GlossaryButton() {
    const navigate = useNavigate()

    return (
        <div >
            <a href="">
                <button onClick={() => { navigate('/glossary') }} className="glossary-button">Glossary
                </button>
            </a>
        </div>
    );
}
export default GlossaryButton;