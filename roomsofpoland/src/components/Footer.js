import React from "react";
import logo from "../images/logo.png"
import "../style/footer.scss"
import facebook from "../images/facebook.png"

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="logo">
                        <img src={logo} alt= "logo"/>
                    </div>
                    <div className="address">
                        <p>
                            Rooms of Poland
                            <br/>
                            96 - 300 Krzyżówka
                            <br/>
                            ul. Wypoczynkowa 4
                            <br/>
                            + 48 507 004 901
                            <br/>
                            email: roomsofpoland@gmail.com
                        </p>
                    </div>
                    <div className="information">
                        <h3>Informacje</h3>
                        <a href = "#">Regulamin obiektu</a>
                    </div>
                    <div className="links">
                        <a href = "#"><img src ={facebook} alt = "Facebook"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;