import React from "react";

function BookingForm () {
    return (
        <form id="bookForm" onSubmit="return book();">
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" required/>

            <label htmlFor="name">Nazwisko</label>
            <input type="text" name="name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>

            <label htmlFor="date">Data od</label>
            <input type="date" name="date" required/>

            <label htmlFor="date">Data do</label>
            <input type="date" name="date" required/>

            <input type="submit" value="Wyślij" disabled id="bookGo"/>
        </form>
    )
}

export default BookingForm;