import React from "react";
import "../style/header.scss";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import {Link} from "react-router-dom";
import {useState} from "react";

export function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header>
            <div className="navbar">
                <div className="logo"><Link to ="/main"><img src={logo} alt= "logo"/></Link></div>
                <button className="hamburger" onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}><img src={menu} alt= "Ikonka przedstawiająca menu strony"/></button>
                <div className = {
                    isNavExpanded ? "menu expanded" : "menu"
                }>
                    <ul>
                        <li ><Link to ="/about">O nas</Link></li>
                        <li ><Link to ="/rooms">Pokoje</Link></li>
                        <li ><Link to ="/reservation">Cennik/Rezerwacje</Link></li>
                        <li ><Link to ="/attractions">Atrakcje</Link></li>
                        <li ><Link to ="/opinionsFAQpage">Częste pytania/Opinie</Link></li>
                        <li ><Link to ="/contact">Kontakt</Link></li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header;