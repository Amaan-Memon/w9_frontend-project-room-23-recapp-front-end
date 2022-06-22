import React from "react";
import { useNavigate } from "react-router";
import './DropDown.css'

export default function WeeksDropDown(){
    const navigate = useNavigate()
    return(
        <div>
            <a>
            <button className="weeks--dropdown" onClick = {()=>{navigate('/week')}}>Weeks</button>
            </a>
        </div>
    );
}