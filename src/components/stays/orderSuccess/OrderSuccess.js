import React from "react";
import Button from "react-bootstrap/button"
import {NavLink} from "react-router-dom"

export default function OrderSuccess(){
    return(
        <>
            <h1>Stay booked!</h1>
            <hr className="hr__header" />
            <p>Thank you for you purchase!</p>
            <p>Your stay has been booked and an email with information and the reciept will show up in your email shortly.</p>
            <p>We hope you have a relaxing stay, bon voyage!</p>
            <br />
            <NavLink to="/">
                <div className="button__container" style={{marginBottom: "80px"}}>
                    <Button className="card-button" type="submit">Go back to front page</Button>
                </div>
            </NavLink>
        </>
    )
}