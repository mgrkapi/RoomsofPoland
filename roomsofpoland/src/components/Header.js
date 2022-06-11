import React from "react";
import "../style/header.scss";
import logo from "../images/logo.png"
import {Link} from "react-router-dom";
import about from "../about";
import rooms from "../rooms";
import reservation from "../reservation"
import main from "../main";

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo"><Link to ="/main"><img src={logo} alt= "logo"/></Link></div>
                <div className = "menu">
                    <ul>
                        <li ><Link to ="/about">O nas</Link></li>
                        <li ><Link to ="/rooms">Pokoje</Link></li>
                        <li ><Link to ="/reservation">Cennik/Rezerwacje</Link></li>
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