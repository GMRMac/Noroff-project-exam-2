import React, { useState, useEffect } from "react";
import jsonData from "../../../json/contact.json"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportItem from "./ContactItem"
import {NavLink} from "react-router-dom"; 

export default function Support(){
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);
        
    useEffect(() => { // This gets the data from the local JSON instead of depending on a link
        setStays(jsonData)
       setFilteredStays(jsonData)
    }, []);
    stays.sort(predicateBy("clientName")); // Sorting function that lets you sort objects based on a value name
    
    return (
        <Row>
            <p className="p--small"><NavLink to="/admin">Admin page</NavLink> / Contacts</p>
            <h1>Support</h1>
            <hr className="hr__header" />        
            {stays.map(stay => {
                let randomKey = Math.random();
                const {clientName, establishment, email, message} = stay;
//                console.log(stay)
                return (
                    <Col sm={12} key={randomKey}>
                        <SupportItem clientName={clientName} establishment={establishment} email={email} message={message} />
                    </Col>
                )
            })}
        </Row>
    )
}

// Sorting function
function predicateBy(prop){
   return function(a,b){
      if (a[prop] > b[prop]){
          return 1;
      } else if (a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}