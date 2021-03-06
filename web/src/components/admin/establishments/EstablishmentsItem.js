import React from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/Col"
import "./EstablishmentsItem.css"


export default function EstablishmentsItem({id, establishmentName, imageUrl}){
    const arrowRight = require("../../../img/gfx/arrow_right.svg");
    const X = require("../../../img/gfx/X.svg");
    const pen = require("../../../img/gfx/pen.svg");
    const myStyle = {
        backgroundImage: "url(" + imageUrl + ")", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
        
    return(
        <Card className="card--admin">
            <Row>
                <Col sm={2} style={myStyle} className="card--admin__image"></Col>
                <Col sm={7}><h2>{establishmentName}</h2></Col>
                <Col sm={1} xs={4} className="button__card--delete"><img src={X} alt="Delete icon"/></Col>
                <Col sm={1} xs={4} className="button__card--edit"><img src={pen} alt="Edit icon"/></Col>
                <Col sm={1} xs={4} className="button__card--goto"><img src={arrowRight} alt="go to icon"/></Col>
            </Row>
        </Card>
    )
}
           
EstablishmentsItem.propTypes = {
    id: PropTypes.string.isRequired,
    establishmentName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired    
}