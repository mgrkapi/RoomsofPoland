import React from "react";
import "../style/bookingform.scss";
import flamingleft from "../images/flamingleft.png"
import flamingright from "../images/flamingright.png"

function BookingForm(props) {
    return (

        <form id="bookForm" onSubmit="return book();">
            <img className="flaming-left" src={flamingleft} alt="obrazek przedstawiający flaminga"/>
            <img className="flaming-right" src={flamingright} alt="obrazek przedstawiający flaminga"/>
            <div className="bookForm__info">
                <h2>Prosimy o wypełnienie formularza</h2>
                <p>Przesłanie formularza nie jest jednoznaczne z dokonaniem rezerwacji</p>
                <p>Rezerwacja następuje po potwierdzeniu dostępności wybranego pokoju</p>
            </div>
            <div className="bookForm__content">
                <div className="bookForm__fields">
                    <label htmlFor="name">Imię</label>
                    <input type="text" name="name" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="name">Nazwisko</label>
                    <input type="text" name="name" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="phone">Numer telefonu</label>
                    <input type="tel" name="tel" value="+48" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="date">Data zameldowania</label>
                    <input type="date" name="date" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="date">Data wymeldowania</label>
                    <input type="date" name="date" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="adults">Liczba osób dorosłych</label>
                    <input type="number" name="adults" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="children">Liczba dzieci</label>
                    <input type="number" name="children" required/>
                </div>
                <div className="bookForm__fields">
                    <label>
                        Rodzaj pokoju
                    </label>
                        <select>
                            {props.rooms.map(room => (
                                <option value={room.title} key={room.id}>{room.title}</option>
                            ))}
                        </select>
                </div>
                <div className="bookForm__fields">
                    <label>
                        Dodatkowe uwagi
                    </label>
                        <textarea></textarea>
                </div>
                <div className="bookForm__fields">
                <input type="submit" value="Wyślij" disabled id="bookGo"/>
                </div>
            </div>
        </form>
    )
}

export default BookingForm;