import parking from '../images/parking.png'
import amusementpark from '../images/amusementpark.png';
import beach from '../images/beach.png';
import car from '../images/car.png';
import castle from '../images/castle.png';
import kayak from '../images/kayak.png';
import museum from '../images/museum.png';
import scubadiving from '../images/scubadiving.png';
import swimming from '../images/swimming.png';
import wine from '../images/wine.png'

const attractions = [
    {
        id: 1,
        title: "Park of Poland – Suntago",
        description:
            "Największy zadaszony park wodny w Europie, który przez cały rok dostarcza wodnych atrakcji i relaksu pod palmami.",
        url: "https://parkofpoland.com/pl/",
        icon: [swimming],
    },
    {
        id: 2,
        title: "Termy Mszczonów",
        description:
            "Kompleks basenów z wodami termalnymi. Cały kompleks składa się z 5 basenów: dwóch całorocznych basenów termalnych, basenu rekreacyjnego, sportowego i basenu dla dzieci.",
        url: "https://www.termy-mszczonow.eu/lang,pl",
        icon: [swimming],
    },
    {
        id: 3,
        title: "Deep Spot Indoor Diving Center",
        description:
            "Najgłębszy basen do nurkowania na świecie.",
        url: "https://www.deepspot.com/pl/",
        icon: [scubadiving],
    },
    {
        id: 4,
        title: "Plaża miejska w Żyrardowie",
        description:
            "Piaszczysta plaża ze strzeżonymi kąpieliskami, boiskami, placem zabaw i wypożyczalnią sprzętu wodnego.",
        url: "https://www.zyrardow.pl/kapielisko-nad-zalewem-zyrardowskim/",
        icon: [beach],
    },
    {
        id: 5,
        title: "Spływy kajakowe Rawką",
        description:
            "Rawka przepływa przez Bolimowski Park Krajobrazowy. Wybór tras o różnej długości i różnym stopniu trudności.",
        url: "https://www.bolimow.pl/94,rzeka-rawka",
        icon: [kayak],
    },
    {
        id: 6,
        title: "Pałac w Radziejowicach",
        description:
            "Pałac w stylu klasycystycznym wraz z otaczającym go parkiem. Radziejowicki park jest otwarty dla zwiedzających codziennie od zmierzchu do świtu, a wstęp na jego teren jest bezpłatny. ",
        url: "https://www.palacradziejowice.pl/multipage-home/",
        icon: [castle],
    },
    {
        id: 7,
        title: "Winnica Dwórzno",
        description:
            "Największa winnica na Mazowszu oferuje spacery po winnice, zwiedzanie przetwórni oraz degustacje.",
        url: "https://www.winnica.dworzno.pl",
        icon: [wine],
    },
    {
        id: 8,
        title: "Muzeum lniarstwa",
        description:
            "Muzeum mieści się w jednym z pofabrycznych budynków Bielnika, który stanowił niegdyś część kompleksu produkcyjnego żyrardowskiej fabryki.",
        url: "https://www.muzeumlniarstwa.pl",
        icon: [museum],
    },
    {
        id: 9,
        title: "Driveland",
        description:
            "Ośrodek doskonalenia techniki jazdy. " +
            "Na jego terenie działa Akademia Bezpiecznej Jazdy Tomasza Kuchara. " +
            "Na terenie obiektu znajdują się liczne drogi i place manewrowe wyposażone w systemy symulujące różne sytuacje na drodze.",
        url: "https://abjtk.pl/driveland",
        icon: [car],
    },
    {
        id: 10,
        title: "Miasto Przygód Mandoria",
        description:
            "Tematyczny park rozrywki inspirowany czasami renesansu. Znajdują się tam m.in. roller-coastery, klasyczne karuzele czy pływające po wodzie łódki.",
        url: "https://mandoria.com",
        icon: [amusementpark],
    }
]

export default attractions;