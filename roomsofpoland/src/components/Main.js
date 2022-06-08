import React from "react";
import "../style/content.scss";
import JPG from "../images/main.jpg";
function Main () {
    return (
        <>
        <section className = "main__content">
            <div className="main"><img src={JPG} alt="room"/></div>
            <h1>Witamy w Rooms of Poland</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>
        </>
    )
}


export default Main;