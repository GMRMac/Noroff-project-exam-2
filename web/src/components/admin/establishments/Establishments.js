import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EstablishmentsItem from "./EstablishmentsItem"
import EstablishmentsAddForm from "./EstablishmentsAddForm"
import jsonData from "../../../json/establishments.json"
import {NavLink} from "react-router-dom"; 

export default function Establishments(){
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [inputEmpty, setInputEmpty] = useState(true);
    const check = require("../../../img/gfx/checkWhite.svg");
    
    useEffect(() => { // This gets the data from the local JSON instead of depending on a link
        setStays(jsonData);
        setFilteredStays(jsonData)
    }, [])
    
    const filterCards = function(e){
        const searchValue = e.target.value.toLowerCase();
    
        if(e.target.value !== ""){
            setInputEmpty(false)
        } else {
            setInputEmpty(true)
        }
        const filteredArray = stays.filter(function(stay){
            const lowerCaseStay = stay.establishmentName.toLowerCase();
            
            if(lowerCaseStay === stay.establishmentName(searchValue)){
                return true;
            }
            return false;
        })
        setFilteredStays(filteredArray); 
    }
    var lenghts = 0;
    
    for (var lengthed of filteredStays){
        if(Number(lengthed.id) > lenghts){
            lenghts = Number(lengthed.id)
        }
    }
    var addSuccess = localStorage.getItem("addSuccessful"),
        editSuccess = localStorage.getItem("editSuccessful"),
        removeSuccess = localStorage.getItem("removeSuccessful");
    
    return (
        <Row>
            <p className="p--small"><NavLink to="/admin">Admin page</NavLink> / Establisments</p>
            {(() => {
                    switch (addSuccess === "You have successfully added an establishment!"){
                        case true:
                            setTimeout(function(){
                                localStorage.removeItem("addSuccessful")
                            }, 100)
                            return <Col sm={{span:8, offset: 2}}><div id="alertOk" className="alert__container alert__container--success"><img src={check}  className="input__icon" alt="check icon" /><div className="alert__content alert__content--success">{addSuccess}</div></div></Col>;
                        case false:
                            return "";
                        default:
                            return "test";
                    }
                }
            )()}            
            {(() => {
                    switch (editSuccess === "You have successfully edited an item!"){
                        case true:
                            return <Col sm={{span:8, offset: 2}}><div id="alertEdit" className="alert__container alert__container--edit"><img src={check}  className="input__icon" alt="check icon" /><div className="alert__content alert__content--edit">{editSuccess}</div></div></Col>;
                        case false:
                            return "";
                        default:
                            return "test";
                    }
                }
            )()}            
            {(() => {
                    switch (removeSuccess === "You have successfully removed an item!"){
                        case true:
                            return <Col sm={{span:8, offset: 2}}><div id="alertDel" className="alert__container alert__container--remove"><img src={check}  className="input__icon" alt="check icon" /><div className="alert__content alert__content--remove">{removeSuccess}</div></div></Col>;
                        case false:
                            return "";
                        default:
                            return "test";
                    }
                }
            )()}
            <h1>Add establishemnts</h1>
            <hr className="hr__header" />
            <EstablishmentsAddForm arrayLength={lenghts}/>
            <h1>Establishments overview</h1>
            <hr className="hr__header" />
            {filteredStays.map(stay => {
                const {id, establishmentName, imageUrl, arrayLength} = stay;
                
                return (
                    <Col lg={6} key={id}>
                        <EstablishmentsItem id={id} establishmentName={establishmentName} imageUrl={imageUrl} />
                    </Col>
                )
            })}
        </Row>
    )
}