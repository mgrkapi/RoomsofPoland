import React from "react";
import AttractionsDescriptions from "../components/AttractionsDescriptions.js";
import attractions from "../data/attractions";
import AttractionsMain from "../components/AttractionsMain.js";

function Attractions() {
    return (
        <>
        <AttractionsMain/>
        <AttractionsDescriptions attractions={attractions}/>
        </>
)
}

export default Attractions;