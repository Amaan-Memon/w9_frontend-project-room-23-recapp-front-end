import React from "react";
import "./Card.css"

function ResourceCard({ resourcesLink, resourcesTopic, resourcesValue, resourcesWeek, resourcesImage }) {
    return (
        <div className="resources--order">
            <div>
                <img className="card--image" src={resourcesImage} alt="Resource" />
            </div>
            <div>
                <a target="_blank" rel="noreferrer noopener" className="topic" href={resourcesLink}>
                    <h2 className="topic">{resourcesTopic[0].toUpperCase() + resourcesTopic.substring(1)}</h2>
                </a>
                <h3 className="resources">Week {resourcesWeek}</h3>
                <h4 className="resources--value">{resourcesValue} Likes</h4>
            </div>
        </div>
    )
}
export default ResourceCard;