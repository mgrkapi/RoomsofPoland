import React from "react";
import parking from "../images/parking.png";
import wifi from "../images/wifi.png";
import garden from "../images/garden.png";
import grill from "../images/grill.png";
import "../style/aboutusblurb.scss";

function AboutusBlurb () {
    return (
        <div className="section">
            <div className="section__content">
                <img src={parking} alt="ikonka przedstawiająca parking"/>
                <p>Oferujemy bezpłatny, ogrodzony parking</p>
            </div>
            <div className="section__content">
                <img src={wifi} alt="ikonka przedstawiająca wifi"/>
                <p>Na terenie obiektu dostęp do dobrej jakości wifi</p>
            </div>
            <div className="section__content">
                <img src={garden} alt="ikonka przedstawiająca ogród"/>
                <p>Duży ogród</p>
            </div>
            <div className="section__content">
                <img src={grill} alt="ikonka przedstawiająca grill"/>
                <p>Strefa grill&chill z ławkami, stolikami oraz miejscem na ognisko</p>
            </div>
        </div>
    )
}

export default AboutusBlurb;