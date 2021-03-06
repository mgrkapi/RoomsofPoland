import React, {useEffect, useState} from 'react';
import "../style/roomsdescription.scss";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config";



function RoomsDescription() {

    const [rooms, setRooms] = useState([]);

    const Data = async () => {
        const roomsDB = collection(db, "rooms" );
        //przypisanie ścieżki
        getDocs(roomsDB)
            //pobranie dokumentów ze ścieżki
            .then(snapshot => {
                    //sprawdzanie kolekcji
                    setRooms(snapshot.docs.map(doc => (
                        //dodawanie każdego dokumentu osobno (zdestrukturyzowany)
                        {...doc.data(), id: doc.id}
                    //    jak powyższe wykona się, to dodaje wszystko do rooms
                    )))
                }
            )
        return rooms
    }
    console.log(rooms)

    useEffect(() => {
        Data();
    }, [])
    //wywołanie funkcji i zatrzymanie tablicą (dodana pusta tablica, żeby się nie zapętlała)

    return (
        <>
            <div className="rooms-section">
                <h2>Nasze pokoje</h2>
                {rooms.map(room => (
                    //mapa z tego co zostało przekazane do usestate z bazy danych
                    <div className="rooms-details" key={room.uid}>
                        <div className="box">
                            <img src={room.image} alt="Zdjęcie pokoju"/>
                            <div className="box-description">
                                <h3>
                                    {room.title}
                                </h3>
                                <p>
                                    {room.description}
                                </p>
                                <div className="box-icons">
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RoomsDescription;