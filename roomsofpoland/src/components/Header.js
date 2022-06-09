import React from "react";
import "../style/header.scss";
import logo from "../images/logo.png"
import {Link} from "react-router-dom";
import about from "../about";
import rooms from "../rooms";

export function Header() {
    return (
        <header class="header__main">
            <div className="container">
                <div className="logo"><img src={logo} alt= "logo"/></div>
                <div className = "menu">
                    <ul>
                        <li ><Link to ="/about">O nas</Link></li>
                        <li ><Link to ="/rooms">Pokoje</Link></li>
                        <li ><Link to ="/">Cennik/Rezerwacje</Link></li>
                        <li ><Link to ="/">Atrakcje</Link></li>
                        <li ><Link to ="/">Opinie</Link></li>
                        <li ><Link to ="/">Kontakt</Link></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;