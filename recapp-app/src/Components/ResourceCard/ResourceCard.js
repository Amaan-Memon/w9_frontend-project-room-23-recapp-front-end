import React from "react";
import "./Card.css"

function ResourceCard({resourcesLink, resourcesTopic, resourcesValue, resourcesWeek, resourcesImage}){
    return (
        <div className="content--card">
            <img className="card--image" src={resourcesImage} alt="Resource"/>
            <a href={resourcesLink}><h2 className="topic">{resourcesTopic}</h2></a>
            <h3 className="resources">Week {resourcesWeek}</h3>
            <h4 className="resources--value">{resourcesValue} Likes</h4>
        </div>
    )
}
export default ResourceCard;