import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Search.css";

export default function Search(){
    return(
        <div className="search">
            <Row className="col-sm-12">
                <Col sm={{span:6, offset:3}}>
                    <div className="input--border">
                        <input placeholder="Find your dream stay" />
                    </div>
                </Col>
                <Col sm={{span:3, offset:3}}>
                    <div className="input--border">
                        <input placeholder="Check-in"/>
                    </div>
                </Col>
                <Col sm={{span:3}}>
                    <div className="input--border">
                        <input placeholder="Check-out"/>
                    </div>
                </Col>
            </Row>
            <div className="button__container">
                <Button className="card-button" block>Check availability!</Button>
            </div>
        </div>
    )
}