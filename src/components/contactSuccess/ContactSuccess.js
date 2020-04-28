import React from "react";
import Button from "react-bootstrap/button"
import {NavLink} from "react-router-dom"

export default function ContactSuccess(){
    return(
        <>
            <h1>Form successfully sent in</h1>
            <hr className="hr__header" />
            <p>Thank you for contacting us! Your form has been successfully sent in to Holidaze and will be reviewed shortly.</p>
            
            <br/>
            <NavLink to="/">
                <div className="button__container" style={{marginBottom: "80px"}}>
                    <Button className="card-button" type="submit">Go back to front page</Button>
                </div>
            </NavLink>
        </>    
    )
}