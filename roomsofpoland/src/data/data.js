import garden from "../images/garden.png";
import wifi from "../images/wifi.png";
import grill from "../images/grill.png";
import parking from "../images/parking.png";
import bathroom from "../images/bathroom.png";
import screen from "../images/screen.png";
import terrace from "../images/terrace.png";
import Aruba from "../images/Aruba.jpg";
import Hawaje from "../images/Hawaje.jpg";
import Madagaskar from "../images/Madagaskar.jpg";
import SeaStandard from "../images/SeaStandard.jpg";
import main from "../images/main.jpg";
import Forest from "../images/Forest.jpg";
import Sea from "../images/Sea.jpg";

const Data = {

        rooms: [
            {
                id: 1,
                title: "Aruba",
                description:
                    "Pokój o powierzchni 10 m2 zlokalizowany jest na parterze. Dostępne są wspólna łazienka oraz kuchnia. Jest to pokój dwusobowy, wyposażony w wygodne łóżko. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [Aruba]
            },
            {
                id: 2,
                title: "Hawaje",
                description:
                    "Pokój o powierzchni 10 m2 zlokalizowany jest na parterze. Dostępne są wspólna łazienka oraz kuchnia. Jest to pokój dwusobowy, wyposażony w kuchenkę mikrofalową, przybory kuchenne oraz zestaw do parzenia kawy i herbaty.W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [Hawaje]
            },
            {
                id: 3,
                title: "Madagaskar",
                description:
                    "Pokój o powierzchni 12 m2 zlokalizowany jest na parterze. Dostępne są wspólna łazienka oraz kuchnia. Jest to pokój trzyosobowy, wyposażony w wygodne łóżko, rozkładaną kanapę oraz szafę. Pokój ten posiada również własny taras. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [Madagaskar]
            },
            {
                id: 4,
                title: "Apartament Morski typ:Standard",
                description:
                    "Apartament o powierzchni 15 m2 zlokalizowany jest na parterze. Jest to apartament dwusobowy z prywatną łazienką, aneksem kuchennym oraz telewizorem. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [SeaStandard]
            },
            {
                id: 5,
                title: "Apartament Leśny typ:Standard",
                description:
                    "Apartament o powierzchni 15 m2 zlokalizowany jest na parterze. Jest to apartament dwusobowy z prywatną łazienką, aneksem kuchennym oraz telewizorem. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [main]
            },
            {
                id: 6,
                title: "Apartament Morski typ:Deluxe",
                description:
                    "Apartament o powierzchni 18 m2 zlokalizowany jest na parterze. Jest to apartament trzyosobowy z podwójnym łóżkiem, rozkładaną kanapą, prywatną łazienką, aneksem kuchennym oraz telewizorem. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [Sea]
            },
            {
                id: 7,
                title: "Apartament Leśny typ:Deluxe",
                description:
                    "Apartament o powierzchni 18 m2 zlokalizowany jest na parterze. Jest to apartament trzyosobowy z podwójnym łóżkiem, rozkładaną kanapą, prywatną łazienką, aneksem kuchennym oraz telewizorem. W cenę pobytu wliczone są pościel, ręczniki, miejsce parkingowe oraz na terenie całego obiektu nieograniczony dostęp do internetu.",
                images: [Forest]
            },

        ],

        icons: [
            {
                id: 1,
                alt: "Ikonka przedstawiająca ogród",
                src: garden,
                title: "Widok na ogród",
            },
            {
                id: 2,
                alt: "Ikonka przedstawiająca wifi",
                src: wifi,
            },
            {
                id: 3,
                alt: "Ikonka przedstawiająca grill",
                src: grill,
            },
            {
                id: 4,
                alt: "Ikonka przedstawiająca parking",
                src: parking,
            },
            {
                id: 5,
                alt: "Ikonka przedstawiająca łazienkę",
                src: bathroom,
            },
            {
                id: 6,
                alt: "Ikonka przedstawiająca taras",
                src: terrace,
            },
            {
                id: 7,
                alt: "Ikonka przedstawiająca telewizor",
                src: screen,
            },
        ],
        images: [Aruba]
    }



export default Data;