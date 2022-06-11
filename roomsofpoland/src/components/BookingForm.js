import React from "react";
import "../style/bookingform.scss";

function BookingForm(props) {
    return (

        <form id="bookForm" onSubmit="return book();">
            <div className="bookForm__info">
                <h2>Prosimy o wypełnienie formularza</h2>
                <p>Przesłanie formularza nie jest jednoznaczne z dokonaniem rezerwacji</p>
                <p>Rezerwacja następuje po potwierdzeniu dostępności wybranego pokoju</p>
            </div>
            <div className="bookForm__fields">

                <label htmlFor="name">Imię</label>
                <input type="text" name="name" required/>

                <label htmlFor="name">Nazwisko</label>
                <input type="text" name="name" required/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" required/>

                <label htmlFor="phone">Numer telefonu</label>
                <input type="tel" name="tel" value="+48" required/>

                <label htmlFor="date">Data zameldowania</label>
                <input type="date" name="date" required/>

                <label htmlFor="date">Data wymeldowania</label>
                <input type="date" name="date" required/>

                <label htmlFor="adults">Liczba osób dorosłych</label>
                <input type="number" name="adults" required/>

                <label htmlFor="children">Liczba dzieci</label>
                <input type="number" name="children" required/>

                <label>
                    Rodzaj pokoju
                    <select>
                        {props.rooms.map(room => (
                            <option value={room.title} key={room.id}>{room.title}</option>
                        ))}
                    </select>
                </label>
                <input type="submit" value="Wyślij" disabled id="bookGo"/>
            </div>
        </form>
    )
}

export default BookingForm;