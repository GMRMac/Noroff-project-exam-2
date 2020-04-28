import React from "react";
import {NavLink} from "react-router-dom";
import "./404.css";

export default function f404(){
    const deadLink = require("../../img/gfx/dead_link.svg");
    
    return (<>  <h1>404</h1>
                <br/>
                <h2>Oh no! It look like while getting lost, you found a dead link.</h2>
                <h2><NavLink to="/">Click here to go to the home screen.</NavLink></h2>
                <img className="deadLink" src={deadLink} />
            </>)
}