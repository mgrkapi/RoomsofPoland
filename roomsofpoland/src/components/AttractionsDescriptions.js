import React from "react";
import "../style/attractionsdescriptions.scss";

function AttractionsDescriptions (props) {
    return (
        <div className="attractions">
            {props.attractions.map(attraction => (
                <div className="attractions__description" key={attraction.id}>
                    <h2>{attraction.title}</h2>
                    <p>{attraction.description}</p>
                    <button><a href={attraction.url}>Szczegóły</a></button>
                </div>
            ))}
        </div>
    );
}

export default AttractionsDescriptions;