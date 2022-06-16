import React from "react";
import dom from "../images/dom.jpg";
import "../style/aboutusmain.scss";

function AboutusMain() {
    return (
        <div className="main-content">
            <div className="description">
                <h2>O nas</h2>
                <p>
                    Zapraszamy do Rooms of Poland, miejsca spokojnego, z dala od miejskiego zgiełku, a jednocześnie
                    blisko największego zadaszonego parku wodnego w Europie . Każdy znajdzie tu coś dla siebie: spacery
                    po lesie, zbieranie grzybów, wycieczki po okolicy, spływy kajakowe, wieczory przy ognisku czy relaks
                    w Suntago. Bliskość trasy S8 pozwala na szybki i wygodny dojazd oraz dostęp do pobliskich atrakcji.
                    W pobliżu znajduje się sklep, w którym można zaopatrzyć się w najpotrzebniejsze produkty.
                </p>
                <p>
                    Na naszym terenie znajdują się trzy domki, w których oferujemy łącznie 17 miejsc noclegowych. W
                    głównym budynku znajdują się trzy pokoje, przestronna, wspólna łazienka oraz kuchnia z pełnym
                    wyposażeniem. W dwóch pozostałych budynkach znajdują się po dwa apartamenty z prywatną łazienką orz
                    aneksem kuchennym.
                </p>
                <p>
                    Oferujemy również strefę grill&chill, gdzie znajduje się miejsce na ognisko oraz ławki ze stołami do
                    wspólnego biesiadowania. W przestronnym ogrodzie każdy znajdzie miejsce do relaksu, opalania czy
                    zabawy.
                </p>
            </div>
            <img src={dom} alt="zdjęcie domu"/>
        </div>
    )
}

export default AboutusMain;