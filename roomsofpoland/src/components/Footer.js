import React from "react";
import logo from "../images/logo.png"
import "../style/footer.scss"
import facebook from "../images/facebook.png"

function Footer() {
    return (
        <footer>
            <div>
                <div className="footer">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="address">
                        <h3>Adres</h3>
                        <p>Rooms of Poland</p>
                        <p>ul. Wypoczynkowa 4</p>
                        <p>96 - 300 Krzyżówka</p>
                    </div>
                    <div className="contact">
                        <h3>Kontakt</h3>
                        <p>+ 48 507 004 901</p>
                        <p>email: roomsofpoland@gmail.com</p>
                    </div>
                    <div className="links">
                        <a href="https://www.facebook.com/roomsofpoland"><img src={facebook} alt="Facebook"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;