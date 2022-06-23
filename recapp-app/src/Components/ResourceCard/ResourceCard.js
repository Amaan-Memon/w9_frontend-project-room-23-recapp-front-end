import React from "react";

function ResourceCard({resourcesLink, resourcesTopic, resourcesValue, resourcesWeek}){
    return (
        <div className="content--card">
            <img className="card--image" href="" alt="Resource"/>
            <h4 href={resourcesLink}>{resourcesTopic}</h4>
            <h3>{resourcesWeek}</h3>
            <h2>{resourcesValue}</h2>
        </div>
    )
}
export default ResourceCard;