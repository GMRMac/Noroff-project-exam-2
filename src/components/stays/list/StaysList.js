import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ESTABLISHMENTS_DATA } from "../../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StaysItem from "./StaysItem";
import Search from "./Search";

export default function StaysList(){
    
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);
        
    useEffect(() => {
        fetch(ESTABLISHMENTS_DATA)
            .then(response => response.json())
            .then(json => {setStays(json)
                           setFilteredStays(json)
                           console.log(json)
                          })
            .catch(error => console.log(error))
    }, []);
    
    const filterCards = function(e){
        const searchValue = e.target.value.toLowerCase();
        
        if(e.target.value != ""){
            setInputEmpty(false)
        } else {
            setInputEmpty(true)
        }
        
        const filteredArray = stays.filter(function(stay){
            const lowerCaseStay = stay.establishmentName.toLowerCase();
            
            if(lowerCaseStay = stay.establishmentName(searchValue)){
                return true;
            }
            return false;
        })
        
        setFilteredStays(filteredArray);
        
    }
    
    return (
        <Row>
            <Search/>
            <h1>Suggestions</h1>
            <hr className="hr__header" />
            {filteredStays.map(stay => {
                const {id, establishmentName, imageUrl} = stay;
                
                return (
                    <Col md={6} lg={4} key={id}>
                        <StaysItem id={id} name={establishmentName} image={imageUrl} />
                    </Col>
                )
            })}
        </Row>
    )
}