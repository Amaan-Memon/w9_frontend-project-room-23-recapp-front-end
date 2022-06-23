import React from "react";
import "./Card.css"

function ResourceCard({resourcesLink, resourcesTopic, resourcesValue, resourcesWeek, resourcesImage}){
    return (
        <div className="content--card">
            <img className="card--image" href="" alt="Resource"/>
            <a href={resourcesLink}><h4>{resourcesTopic}</h4></a>
            <h3>Week {resourcesWeek}</h3>
            <h2>{resourcesValue} Likes</h2>
        </div>
    )
}
export default ResourceCard;