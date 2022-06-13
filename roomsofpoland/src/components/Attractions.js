import React from "react";
import AttractionsDescriptions from "../components/AttractionsDescriptions.js";
import attractions from "../data/attractions";
function Attractions() {
    return (
        <AttractionsDescriptions attractions={attractions}/>
)
}

export default Attractions;