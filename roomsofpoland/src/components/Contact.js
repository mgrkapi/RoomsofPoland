import React from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";
import "../style/contact.scss";

function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Kontakt</h1>

            <div className="contact-details">
                <div className="contact-address">
                    <img src={address} alt="Ikona przedstawiająca dom"/>
                    <div className="address-details">
                        <p>Rooms of Poland</p>
                        <p>ul. Wypoczynkowa 4</p>
                        <p>96 - 300 Krzyżówka</p>
                    </div>
                </div>
                <div className="contact-phone">
                    <img src={phone} alt="Ikona przedstawiająca telefon"/>
                    <p>+ 48 507 004 901</p>
                </div>
                <div className="contact-email">
                    <img src={email} alt="Ikona przedstawiająca email"/>
                    <p>roomsofpoland@gmail.com</p>
                </div>
            </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9827.685452285012!2d20.4677831!3d51.9900869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dc2ef4c1fa1dde5!2sRooms%20of%20Poland!5e0!3m2!1spl!2spl!4v1655455321423!5m2!1spl!2spl"
                        style={{width: 800, height: 450, borderRadius: 4}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title="map">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default Contact;