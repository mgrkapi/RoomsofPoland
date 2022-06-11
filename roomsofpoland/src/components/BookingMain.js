import React from "react";
import "../style/bookingmain.scss";
import BookingForm from "./BookingForm";

function BookingMain() {
    return (
        <>
            <div className="booking-header">
                <h2>Rezerwacja pokoi oraz apartamentów</h2>
                <p>Wypełnij poniższy formularz w celu dokonania wstępnej rezerwacji pokoju. Poczekaj na kontakt
                    telefoniczny
                    lub email od obsługi obiektu.</p>
            </div>
            <BookingForm/>

        </>
    )
}

export default BookingMain;