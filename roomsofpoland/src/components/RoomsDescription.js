import React from 'react';
import "../style/roomsdescription.scss";

function RoomsDescription(props) {

    const getIcon = id => props.icons.find(el => el.id === id);

    return (
        <>
            <div className="rooms-section">
                <h2>Nasze pokoje</h2>
                {props.rooms.map(room => (
                    <div className="rooms-details" key={room.id}>
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
                                    <img src={getIcon(1) ? getIcon(1).src : "DefaultIcon"}
                                         alt="Ikonka przedstawiająca ławkę"/>
                                    <img src={getIcon(2) ? getIcon(2).src : "DefaultIcon"}
                                         alt="Ikonka przedstawiająca internet"/>
                                    <img src={getIcon(3) ? getIcon(3).src : "DefaultIcon"}
                                         alt="Ikonka przedstawiająca grill"/>
                                    <img src={getIcon(4) ? getIcon(4).src : "DefaultIcon"}
                                         alt="Ikonka przedstawiająca parking"/>
                                    <img src={getIcon(5) ? getIcon(5).src : "DefaultIcon"}
                                         alt="Ikonka przedstawiająca łazienkę"/>
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