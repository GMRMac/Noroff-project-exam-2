import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import jsonData from "../../../json/enquiries.json"
import Col from "react-bootstrap/Col";
import EnquiriesItem from "./EnquiriesItem"
import {NavLink} from "react-router-dom"; 

export default function Establishments(){
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);
        
    // This gets the data from the local JSON instead of depending on a link
    useEffect(() => {
        setStays(jsonData)
       setFilteredStays(jsonData)
    }, []);
    stays.sort(predicateByOposite("checkout")); // Sorting function that lets you sort objects based on a value name
    
    return (
        <Row>
            <p className="p--small"><NavLink to="/admin">Admin page</NavLink> / Enquiries</p>
            <h1>Enquiries</h1>
            <hr className="hr__header" />
            <Col sm={5}><p style={{textAlign: "left", marginLeft:"12px"}}>Client name</p></Col>
            <Col sm={3}><p style={{textAlign: "left"}}>Check-in</p></Col>
            <Col sm={3}><p style={{textAlign: "left"}}>Check-out</p></Col>
        
            {stays.map(stay => {
                let randomKey = Math.random();
                const {clientName, establishment, email, checkin, checkout} = stay;
//                console.log(stay)
                return (
                    <Col sm={12} key={randomKey}>
                        <EnquiriesItem clientName={clientName} establishment={establishment} email={email} checkin={checkin} checkout={checkout} />
                    </Col>
                )
            })}
        </Row>
    )
}

// Sorting functions
function predicateBy(prop){
   return function(a,b){
      if ( a[prop] > b[prop]){
          return 1;
      }else if ( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}

function predicateByOposite(prop){
   return function(a,b){
      if ( a[prop] < b[prop]){
          return 1;
      }else if ( a[prop] > b[prop] ){
          return -1;
      }
      return 0;
   }
}