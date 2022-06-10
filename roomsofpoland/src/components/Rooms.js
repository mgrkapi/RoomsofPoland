import React from "react";
import RoomsMain from "../components/RoomsMain";
import RoomsDescription from "../components/RoomsDescription";
import data from "../data/data";

function Rooms() {
    //TODO load data from firebase instead of file data
    //useEffect

    return (
        <>
            <RoomsMain/>
            <RoomsDescription rooms={data.rooms} images={data.images} icons={data.icons}/>
        </>
    )
}

export default Rooms;