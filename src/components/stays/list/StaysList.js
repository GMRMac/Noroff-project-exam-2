import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StaysItem from "./StaysItem";
import Search from "./Search";
import jsonData from "../../../json/establishments.json"
import {NavLink} from "react-router-dom"; 

export default function StaysList(){    
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);

    // This gets the data from the local JSON instead of depending on a link
    useEffect(() => {
        setStays(jsonData)
        setFilteredStays(jsonData)
    }, []);
    
    const filterCards = function(e){
        const values = document.getElementById("seachFieldFromHell").value.toLowerCase();
        const checkIn = document.getElementById("checkIn").value;
        const checkOut = document.getElementById("checkOut").value;
        const searchValue = e.target.value.toLowerCase();
        
        localStorage.setItem("checkinDateAsumption", checkIn);
        localStorage.setItem("checkoutDateAsumption", checkOut);
        
        if(values != ""){
            setInputEmpty(false)
        } else {
            setInputEmpty(true)
        }
        
        const filteredArray = stays.filter(function(stay){
            const lowerCaseStay = stay.establishmentName.toLowerCase();
            if(lowerCaseStay.startsWith(values)){
                console.log("true")
                return true;
            } 
            return false;
        })
        
        setFilteredStays(filteredArray);
        console.log(filteredStays)
    }
    
    return (
        <Row>
            <Search handleSearch={filterCards} inputEmpty={inputEmpty}/>
            <h1>All stays!</h1>
            <hr className="hr__header" /> 
            {filteredStays.map(stay => {
                let randomKey = Math.random();
                const {id, establishmentName, imageUrl, description} = stay;
                return (
                    <Col md={6} lg={4} key={id}>
                        <StaysItem key={randomKey} id={id} name={establishmentName} image={imageUrl} description={description}/>
                    </Col>
                )
            })}
        </Row>
    )
}