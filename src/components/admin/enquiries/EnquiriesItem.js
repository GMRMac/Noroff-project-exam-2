import React from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/Col"
import "./EnquiriesItem.css";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Background from "../../../img/gfx/arrow_down.svg";

export default function EnquiriesItem({clientName, establishment, email, checkin, checkout}){
    console.log(clientName)
    
    function CustomToggle({ children, eventKey }) {
        const onClick = useAccordionToggle(eventKey);
        
        const myStyle = {
            height: "40px",
            width: "100%",
            backgroundSize: "contain",
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${Background})`,
            cursor: "pointer",
            marginTop: "4px"
        }
        
        return (
            <>
                <div  style={myStyle} onClick={onClick}></div>
            </>
        );
        
    }
    
    const arrowRight = require("../../../img/pic/debatten.png");
    
    return(
        <Accordion>
            <Card className="card--admin-enquries">
                <Row>
                    <Col sm={5}><p>{clientName}</p></Col>
                    <Col sm={3}><p>{checkin}</p></Col>
                    <Col sm={3}><p>{checkout}</p></Col>
                    <Col sm={1}><CustomToggle eventKey="0">test</CustomToggle></Col>
                    <Col sm={12}>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <hr className="hr__enquiries" />
                            <p>Email: {email}</p>
                            <p>Establishment: {establishment}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
        </Accordion>
    )
}



EnquiriesItem.propTypes = {
    clientName: PropTypes.string.isRequired,
    establishment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    checkin: PropTypes.string.isRequired,
    checkout: PropTypes.string.isRequired
}