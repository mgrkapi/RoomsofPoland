import React from "react";

function BookingPricing() {
    return (
        <>
            <div className="booking__pricing-rules">
                <h2>Cennik</h2>
                <p>Doba hotelowa trwa od 15:00 do 11:00, ale istnieje możliwość ustalenia godzin indywidualnie w
                    zależności od obłożenia obiektu.</p>
                <p>Dla dzieci powyżej 10 lat obowiązuje cena jak za osobę dorosłą</p>
            </div>
            <div className="booking__pricing">
                <div>
                    <img src="/"/>
                    <h3>Pokoje</h3>
                    <p></p>
                </div>
                <div>
                    <img src="/"/>
                    <h3>Apartamenty</h3>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default BookingPricing;