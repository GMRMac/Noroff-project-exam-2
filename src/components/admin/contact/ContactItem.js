import React from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/card"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/Col"
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function SupportItem(){
    return(<>hi</>)
}
           
SupportItem.propTypes = {
    clientName: PropTypes.string.isRequired,
    establishment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    checkin: PropTypes.string.isRequired,
    checkout: PropTypes.string.isRequired
}