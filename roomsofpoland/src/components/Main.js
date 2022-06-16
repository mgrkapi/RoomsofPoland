import React from "react";
import "../style/content.scss";
import main from "../images/main.jpg";

function Main() {
    return (
        <>
            <section className="main__content">
                <div className="main"><img src={main} alt="room"/></div>
                <h1>Witamy w Rooms of Poland!</h1>
                <p>Rooms of Poland to idealne miejsce na odpoczynek dla osób lubiących kontakt z naturą, a jednocześnie
                    ceniących bliską odległość do różnego rodzaju atrakcji.</p>
                <p>Tutaj zapomną Państwo o miejskim hałasie, zatopią się w ciszy i znajdą wyjątkowe miejsca na długie
                    spacery, wycieczki oraz wiele okolicznych atrakcji!</p>
                <p>Każdy może poczuć się niepowtarzalnie poprzez indywidualny charakter wnętrz oraz wszelkie starania,
                    jakich dokładamy, by zapewnić Państwu mile spędzony czas.</p>
                <p>Pokoje zaprojektowane zostały z sercem, a każdy z nich opowiada swoją własną historię, którą
                    najlepiej odkryć wieczorem przy ognisku.</p>
            </section>
        </>
    )
}


export default Main;