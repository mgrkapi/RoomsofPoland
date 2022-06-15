import React from 'react';
import FAQ from "../components/FAQ";
import questions from "../data/questions";
import Opinions from "../components/Opinions";
import opinions from "../data/opinions";

function OpinionsFAQ() {
    return (
        <>
            <FAQ question={questions}/>
            <Opinions opinions={opinions}/>
        </>
    )
}

export default OpinionsFAQ;