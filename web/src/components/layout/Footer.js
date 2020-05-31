import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";

export default function Footer(){
    return(
    <footer>
        <Container>
            <h1>HOLIDAZE</h1>
            <hr className="hr__footer"/>
            <h2 className="h2__footer">Usefull links</h2>
            <p className="p__footer"><a href="#!">Home</a></p>
            <p className="p__footer"><a href="#!">Contact</a></p>
            <p className="p__footer"><a href="#!">Login</a></p>
        </Container>
    </footer>
    )
}