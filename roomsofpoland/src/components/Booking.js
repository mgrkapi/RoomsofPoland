import React from "react";
import BookingBanner from "../components/BookingBanner";
import BookingMain from "../components/BookingMain";
import BookingPricing from "./BookingPricing";

function Booking() {
    return (
        <>
            <BookingBanner/>
            <BookingMain/>
            <BookingPricing/>
        </>
    )
}

export default Booking;