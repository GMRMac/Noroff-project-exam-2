import React from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/Col"
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import arrowDown from "../../../img/gfx/arrow_down.svg";

export default function SupportItem({clientName, email, message}){
    function CustomToggle({children, eventKey}){
        const onClick = useAccordionToggle(eventKey)
        const myStyle = {
                height: "40px",
                width: "40px",
                backgroundSize: "contain",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${arrowDown})`,
                cursor: "pointer",
                marginTop: "4px",
            }
        
        return (
            <>
                <div onClick={onClick} style={myStyle}></div>
            </>
        )
    }
    return(
            <Accordion>
            <Card className="card--admin-enquries">
                <Row>
                    <Col sm={5}><p>{email}</p></Col>
                    <Col sm={3}><p>Other</p></Col>
                    <Col sm={3}><p>To be reviewed</p></Col>
                    <Col sm={1}><CustomToggle eventKey="0">test</CustomToggle></Col>
                    <Col sm={12}>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <hr className="hr__enquiries" />
                            <p>Email: {email}</p>
                            <p>Message: {message}</p>
                            <br/><p>Filed: 01/02/2020 at 11:30pm</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    </Col>
                </Row>
            </Card>
        </Accordion>
    )
}
     
SupportItem.propTypes = {
    clientName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}