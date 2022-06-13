import React from "react";
import dom from "../images/dom.jpg";
import apartamenty from "../images/apartamenty.jpg";
import "../style/bookingpricing.scss";

function BookingPricing(props) {
    return (
        <div className="booking-pricing">
            <div className="booking-pricing__rules">
                <h2>Cennik</h2>
                <p>Doba hotelowa trwa od 15:00 do 11:00, ale istnieje możliwość ustalenia godzin indywidualnie w
                    zależności od obłożenia obiektu.</p>
                <p>Dla dzieci powyżej 10 lat obowiązuje cena jak za osobę dorosłą</p>
            </div>

            <div className="booking-pricing__description">
                {props.room.map(price => (
                    <div className="booking-pricing__details" key={price.id}>
                        <img className= "img1"src={dom} alt="Zdjęcie przedstawiające dom"/>
                        <h3>Dom/Pokoje</h3>
                        <h4>{price.title}</h4>
                        <p>{price.priceTwin}</p>
                        <p>{price.priceTriple}</p>
                        <p>{price.priceRoomWeekend}</p>
                        <p>{price.priceHouse}</p>
                        <p>{price.priceHouse}</p>
                        <p>{price.priceHouseWeekend}</p>
                    </div>
                ))}
                {props.apartament.map(price => (
                    <div className="booking-pricing__details" key={price.id}>
                        <img className= "img2" src={apartamenty} alt="Zdjęcie przedstawiające budynek z apartamentami"/>
                        <h3>Apartamenty</h3>
                        <h4>{price.title}</h4>
                        <p>{price.priceStandard}</p>
                        <p>{price.priceDeLuxe}</p>
                        <p>{price.season}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BookingPricing;