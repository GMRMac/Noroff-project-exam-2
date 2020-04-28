import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { CONTACT_DATA } from "../../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportItem from "./ContactItem"
import {NavLink} from "react-router-dom"; 

export default function Support(){
    
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);
        
    useEffect(() => {
        fetch(CONTACT_DATA)
            .then(response => response.json())
            .then(json => {setStays(json)
                           setFilteredStays(json)
                           console.log(json)
                          })
            .catch(error => console.log(error))
    }, []);
    
//    const filterCards = function(e){
//        const searchValue = e.target.value.toLowerCase();
//        
//        if(e.target.value != ""){
//            setInputEmpty(false)
//        } else {
//            setInputEmpty(true)
//        }
//        
//        const filteredArray = stays.filter(function(stay){
//            const lowerCaseStay = stay.establishmentName.toLowerCase();
//            
//            if(lowerCaseStay = stay.establishmentName(searchValue)){
//                return true;
//            }
//            return false;
//        })
//        
//        
//        setFilteredStays(filteredArray);
//    }
    
    console.log(stays)
    stays.sort(predicateBy("clientName"))
    
    return (
        <Row>
            <p className="p--small"><NavLink to="/admin">Admin page</NavLink> / Contacts</p>
            <h1>Contacts</h1>
            <hr className="hr__header" />
            
            
        
            {stays.map(stay => {
                const randomKey = Math.random();
                const {clientName, establishment, email, message} = stay;
    
                console.log(stay)
                
                return (
                    <Col sm={12} key={randomKey}>
                        <SupportItem clientName={clientName} establishment={establishment} email={email} message={message} />
                    </Col>
                )
            })}
        </Row>
    )
}


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