import React from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";
import "../style/contact.scss";

function Contact () {
    return (
        <div className= "contact-details">
            <div className="contact-address">
                <img src={address}/>
                <div className="address-details">
                    <p>Rooms of Poland</p>
                    <p>ul. Wypoczynkowa 4</p>
                    <p>96 - 300 Krzyżówka</p>
                </div>
            </div>
            <div className="contact-phone">
                <img src={phone}/>
                <p>+ 48 507 004 901</p>
            </div>
            <div className="contact-email">
                <img src={email}/>
                <p>roomsofpoland@gmail.com</p>
            </div>
        </div>
    )
}
export default Contact;