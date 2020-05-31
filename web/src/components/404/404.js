import React from "react";
import {NavLink} from "react-router-dom";
import "./404.css";

export default function f404(){
    const deadLink = require("../../img/gfx/dead_link.svg");
    
    return (
        <>  <h1 className="h1--404">404</h1>
            <br/>
            <p className="p--404">Oh no! It look like while getting lost, you found a dead link.</p>
            <p className="p--404"><NavLink to="/">Click here to go to the home screen.</NavLink></p>
            <img className="deadLink" src={deadLink} alt="404" />
        </>)
}