import React from "react";
import "../style/roomsmain.scss";
import Hawaje2 from "../images/Hawaje2.jpg";

function RoomsMain() {
    return (
        <div className="rooms-main">
            <h1>Pokoje</h1>
            <div className="rooms-main__content">
                <img src={Hawaje2} alt="Zdjęcie pokoju"/>
                <div className="rooms-main__section">

                    <h2>Komfortowe pokoje w Rooms of Poland</h2>
                    <p>
                        Do Państwa dyspozycji oddajemy 2 i 3 osobowe pokoje ze wspólną łazienką oraz apartamenty z
                        prywatną
                        łazienką oraz aneksem kuchennym. Każdy z nich jest urządzony w innym klimacie z dbałością o jak
                        największą wygodę oraz przyjemne wrażenia estetyczne.
                        Większym grupom umożliwiamy również wynajem całego obiektu lub poszczególnych domków na
                        wyłączność.
                    </p>
                    <h2>Udogodnienienia w apartamentach i domku z pokojami</h2>
                    <p>
                        W każdym apartamencie oraz wspólnej kuchni zorganizowaliśmy aneks kuchenny, w którym można
                        przygotować gorący napój lub posiłek. Jest tu również lodówka, czajnik elektryczny, talerze,
                        szklanki i sztućce. W łazience jest suszarka do włosów oraz ręczniki.
                    </p>
                    <p>
                        W apartamentach znajduje się telewizor z płaskim ekranem.
                        Zapraszamy do Rooms of Poland. U nas odpoczniesz i spędzisz miło czas, a dzięki dogodnej
                        lokalizacji
                        będziesz mieć blisko do wielu atrakcji.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RoomsMain;