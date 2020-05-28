import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Search.css";

export default function Search({handleSearch,resetInput,inputEmpty}){
    const today = new Date();
    if(today.getMonth() <= 10){
        var month = "0"+(today.getMonth()+1);
    } else {
        var month = today.getMonth();
    }
    if(today.getDay() >= 10){
        var day = "0"+(Number(today.getDate()));
    } else {
        var day = today.getDate();
    }
    
    const fullToday =  today.getFullYear()+ "-" + month + "-" + day;
    const fullTomorrow =  today.getFullYear()+ "-" + month + "-" + (day+1);
    const houseIcon = require("../../../img/gfx/house.svg"); 
    const checkinIcon = require("../../../img/gfx/checkin.svg"); 
    const checkoutIcon = require("../../../img/gfx/checkout.svg"); 
    
    return(
        <div className="search">
            <Row className="col-sm-12">
                <Col sm={{span:6, offset:3}}>
                    <div className="input--border">
                        <img src={houseIcon}  className="input__icon"  />
                        <input placeholder="Find your dream stay" id="seachFieldFromHell" />
                    </div>
                </Col>
                <Col sm={{span:3, offset:3}}>
                    <div className="input--border">
                        <input type="date" placeholder="Check-in" id="checkIn" defaultValue={fullToday} min={fullToday} />
                    </div>
                </Col>
                <Col sm={{span:3}}>
                    <div className="input--border">
                        <input type="date" placeholder="Check-out" defaultValue={fullTomorrow} id="checkOut" min={fullTomorrow} pattern="\d{2}-\d{2}-\d{4}"/>
                    </div>
                </Col>
            </Row>
            <div className="button__container">
                <Button className="card-button" block  onClick={event => handleSearch(event)} >Check availability!</Button>
            </div>
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    resetInput: PropTypes.func.isRequired,
    inputEmpty: PropTypes.string.isRequired,
}