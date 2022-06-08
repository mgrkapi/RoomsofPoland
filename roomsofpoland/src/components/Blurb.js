import React from "react";
import "../style/blurb.scss"
import Room from "../images/room.png";
import Booking from "../images/booking.png";
import Attractions from "../images/attractions.png";

function Blurb() {
    return (
        <section>
            <div className="container blurb__container">
                <div className="container__content">
                    <img src={Room} alt="Ikona przedstawiająca dom"/>
                    <h2>Pokoje</h2>
                    <p>W naszym obiekcie znajdą Państwo 7 komfortowych pokoi: cztery apartamenty z prywatną łazienką i
                        aneksem kuchennym oraz trzy pokoje ze wspólną kuchnią i łazienką.
                        Na miejscu jest również dostępny parking na ogrodzonym terenie oraz wifi.
                        Zapraszamy do zapoznania się z ofertą poszczególnych pokoi. </p>
                    <a href="#"/>
                </div>
                <div className="container__content">
                    <img src={Booking} alt="Ikona przedstawiająca kalendarz do rezerwacji"/>
                    <h2>Rezerwacje</h2>
                    <p>Zachęcamy do wypełnienia formularza i rezerwacji naszych pokoi</p>
                    <a href="#"/>
                </div>
                <div className="container__content">
                    <img src={Attractions} alt="Ikona przedstawiająca plażę z palmami"/>
                    <h2>Atrakcje</h2>
                    <p>Nasz obiekt znajduje się w doskonałej lokalizacji, niespełna 500m od Suntago. W okolicy jest
                        wiele miejsc do aktywnego wypoczynku jak termy Mszczonów czy spływy kajakowe Rawką. Entuzjaści
                        zwiedzania również znajdą coś dla siebie. Więcej szczegółów znajdą Państwo poniżej.
                    </p>
                    <a href="#"/>
                </div>
            </div>
        </section>
    )
}

export default Blurb;