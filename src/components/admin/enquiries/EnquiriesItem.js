import React from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/Col"
import "./EnquiriesItem.css";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function EnquiriesItem({clientName, establishment, email, checkin, checkout}){
    console.log(clientName)
    
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );
        
        return (
            <>
                <img src={arrowRight} style={{cursor: "disabled"}} onClick={decoratedOnClick} />
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