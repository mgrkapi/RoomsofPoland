import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../style/contactform.scss";
import flamingleft from "../images/flamingleft.png"

 const ContactForm = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q4c62ps', 'template_it1gn6q', form.current, 'iAHZ1x3ZJXrlgHWpw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
        <form ref={form} onSubmit={sendEmail}>
            <img className="flaming-left" src={flamingleft} alt="obrazek przedstawiający flaminga"/>
            <img className="flaming-right" src={flamingleft} alt="obrazek przedstawiający flaminga"/>
            <div className="bookForm__info">
                <h2>Prosimy o wypełnienie formularza</h2>
                <p>Przesłanie formularza nie jest jednoznaczne z dokonaniem rezerwacji</p>
                <p>Rezerwacja następuje po potwierdzeniu dostępności wybranego pokoju</p>
            </div>
            <div className="bookForm__content">
                <div className="bookForm__fields">
                    <label htmlFor="name">Imię i nazwisko</label>
                    <input type="text" name="user_name" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user_email" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="phone">Numer telefonu</label>
                    <input type="tel" name="tel" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="date">Data zameldowania</label>
                    <input type="date" name="start_date" required/>
                </div>
                <div className="bookForm__fields">
                    <label htmlFor="date">Data wymeldowania</label>
                    <input type="date" name="end_date" required/>
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
                    <select name="room_type">
                        {props.rooms.map(room => (
                            <option value={room.title} key={room.id}>{room.title}</option>
                        ))}
                    </select>
                </div>
                <div className="bookForm__fields">
                    <label>
                        Dodatkowe uwagi
                    </label>
                    <textarea name="message"></textarea>
                </div>
                <div className="bookForm__fields">
                    <input type="submit" value="Wyślij"/>
                </div>
            </div>
        </form>
        </div>
    );
};

export default ContactForm;