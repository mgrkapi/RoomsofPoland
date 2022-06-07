import React from "react";
import "../style/header.scss";
import logo from "../images/logo.png"

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo"><img src={logo} alt= "logo"/></div>
                <div className = "menu">
                    <ul>
                        <li ><a href = "#">O nas</a></li>
                        <li ><a href = "#">Pokoje</a></li>
                        <li ><a href = "#">Cennik/Rezerwacje</a></li>
                        <li ><a href = "#">Atrakcje</a></li>
                        <li ><a href = "#">Opinie</a></li>
                        <li ><a href = "#">Kontakt</a></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;