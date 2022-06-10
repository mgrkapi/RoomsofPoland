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
                            <img src={room.images} alt={room.images.alt}/>
                            <div className="box-description">
                                <h3>
                                    {room.title}
                                </h3>
                                <p>
                                    {room.description}
                                </p>
                                <div className = "box-icons">
                                <img src={getIcon(1) ? getIcon(1).src : "DefaultIcon"}/>
                                <img src={getIcon(2) ? getIcon(2).src : "DefaultIcon"}/>
                                <img src={getIcon(3) ? getIcon(3).src : "DefaultIcon"}/>
                                <img src={getIcon(4) ? getIcon(4).src : "DefaultIcon"}/>
                                <img src={getIcon(5) ? getIcon(5).src : "DefaultIcon"} />
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