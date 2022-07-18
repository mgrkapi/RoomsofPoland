import React from "react";
import "../style/attractionsdescriptions.scss";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config";

function AttractionsDescriptions () {

    const [attraction, setAttractions] = useState([]);

    const DataAttr = async () => {
        const attractionsDB = collection(db, "attractions" );
        //path assignment
        getDocs(attractionsDB)
            //fetch documents from path
            .then(snapshot => {
                    //checking collection
                    setAttractions(snapshot.docs.map(doc => (
                        //adding each document separately (destructured)
                        {...doc.data(), id: doc.id}
                        //    if above is done, everything is added to attraction
                    )))
                }
            )
        return attraction
    }
    console.log(attraction)

    useEffect(() => {
        DataAttr();
    }, [])

    return (
        <div className="attractions">
            {attraction.map(attraction => (
                <div className="attractions__description" key={attraction.id}>
                    <div>
                        <img src={attraction.icon} alt=""/>
                        <h2>{attraction.title}</h2>
                        <p>{attraction.description}</p>
                    </div>
                    <div className="button">
                        <button><a href={attraction.url}>Zobacz</a></button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default AttractionsDescriptions;