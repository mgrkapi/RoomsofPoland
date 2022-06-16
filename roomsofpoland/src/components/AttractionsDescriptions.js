import React from "react";
import "../style/attractionsdescriptions.scss";

function AttractionsDescriptions (props) {
    return (
        <div className="attractions">
            {props.attractions.map(attraction => (
                <div className="attractions__description" key={attraction.id}>
                    <div>
                        <img src={attraction.icon} alt=""/>
                        <h2>{attraction.title}</h2>
                        <p>{attraction.description}</p>
                    </div>
                    <div className="button">
                        <button><a href={attraction.url}>Zobacz</a></button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default AttractionsDescriptions;