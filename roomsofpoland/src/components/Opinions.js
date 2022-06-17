import React from "react";
import palm from "../images/palm.png";
import "../style/opinions.scss";

function Opinions({...props}) {
    return (
        <div className="opinions">
            <div className="opinions__title">
                <h1>Opinie</h1>
                <p>A tak o nas mówią Goście, mamy nadzieję, że Państwa pobyt będzie równie przyjemny.</p>
            </div>
            <div className="opinions__description">
                <img src={palm} alt=""/>
                <div className="opinions-details">
                    {props.opinions.map(image => (
                        <img key={image} src={image} alt=""/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Opinions;