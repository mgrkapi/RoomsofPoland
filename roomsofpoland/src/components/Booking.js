import React from "react";
import BookingBanner from "../components/BookingBanner";
import BookingMain from "../components/BookingMain";
import BookingPricing from "../components/BookingPricing";
import pricing from "../data/pricing";

function Booking() {
    return (
        <>
            <BookingBanner/>
            <BookingMain/>
            <BookingPricing  room={pricing.room} apartament={pricing.apartament}/>
        </>
    )
}

export default Booking;