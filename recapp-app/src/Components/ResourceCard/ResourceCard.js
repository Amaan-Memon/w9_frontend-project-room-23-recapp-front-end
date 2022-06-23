import React from "react";
import "./Card.css"

function ResourceCard({resourcesLink, resourcesTopic, resourcesValue, resourcesWeek, resourcesImage}){
    return (
        <div className="content--card">
            <img className="card--image" src={resourcesImage} alt="Resource" style={{width:"15%"}}/>
            <a href={resourcesLink}><h4>{resourcesTopic}</h4></a>
            <h3>Week {resourcesWeek}</h3>
            <h2>{resourcesValue} Likes</h2>
        </div>
    )
}
export default ResourceCard;