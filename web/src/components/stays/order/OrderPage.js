import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/form";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import Row from "react-bootstrap/row";
import  {ENQUIRIES_DATA_SET} from "../../../constants/API"
import Col from "react-bootstrap/col";
import {NavLink} from "react-router-dom";
import OptionDisplayer from "./OptionDisplayer";
import "./OrderPage.css"

const today = new Date();
const fullToday = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
const schema = yup.object().shape({
	clientName: yup
        .string()
        .required("Name is required"),
	email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
	checkin: yup
		.date()
		.required()
        .min(new Date(today.getFullYear(), today.getMonth(), today.getDate()), "Please enter a valid date")
        .max(new Date((today.getFullYear()+5), today.getMonth(), today.getDate()), "Please enter a valid date"),
	checkout: yup
		.date()
		.required()
        .min(new Date(today.getFullYear(), today.getMonth(), (today.getDate()+1)), "Please enter a valid date")
        .max(new Date((today.getFullYear()+5), today.getMonth(), (today.getDate()+1)), "Please enter a valid date"),
    adults: yup
        .number("You must select at least one adult")
        .positive("You must select at least one adult")
        .integer()
        .required("You must select at least one adult"),
    child: yup
        .number("You must select at least one adult")
        .positive("You must select at least 1 adult")
        .integer()
});

export default function OrderPage( {details} ){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    // This removes a bug as it loads this component twice, once with no objects which makes the page crash.
    if(details == null){
        return(<></>)
    }
               
    const {establishmentName,maxGuests,id} = details;         
    const today = new Date();
        
    if(today.getMonth() <= 10){
        var month = "0"+(today.getMonth()+1);
    } else {
        var month = today.getMonth();
    }
    if(today.getDay() >= 10){
        var day = "0"+(Number(today.getDate()));
    } else {
        var day = today.getDate();
    }
    
    const checkinAsumption = localStorage.getItem("checkinDateAsumption");
    const checoutAsumption = localStorage.getItem("checkoutDateAsumption");
    const fullToday =  today.getFullYear()+ "-" + month + "-" + day;
    const fullTomorrow =  today.getFullYear()+ "-" + month + "-" + (day+1);
    const userIcon = require("../../../img/gfx/user.svg"); 
    const emailIcon = require("../../../img/gfx/email.svg"); 
    const msgIcon = require("../../../img/gfx/msg.svg"); 
        
    function onSubmit(data){
        var onlyID = data.id.split(" ")[0];
        var formData = new FormData();
        
        console.log(data.checkin.getFullYear() + "-" + (data.checkin.getMonth()+1) + "-" + data.checkin.getDate())
        
        formData.append("establishmentName", data.establishmentName)
        formData.append("id", data.id)
        formData.append("clientName", data.clientName)
        formData.append("email", data.email)
        formData.append("checkin", data.checkin.getFullYear() + "-" + (data.checkin.getMonth()+1) + "-" + data.checkin.getDate())
        formData.append("checkout", data.checkout.getFullYear() + "-" + (data.checkout.getMonth()+1) + "-" + data.checkout.getDate())
        formData.append("adults", data.adults)
        formData.append("children", data.children)
        formData.append("notes", data.notes)
        
        fetch(ENQUIRIES_DATA_SET, {
            method:"POST",
            body: formData
        }).then(function(response){
            return response;
        }).then(function(data){
            console.log(data); 
            window.location.href = "/stays/"+onlyID+"/order/success/";
        })
    }
             
    return(
        <>
            <p className="p--small"><NavLink to="/">Home</NavLink> / {establishmentName} / Order page</p>
            <Col sm={{span:6, offset: 3}}>
                <h1>{establishmentName}</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="input--border" hidden>
                        <Form.Control value={establishmentName} className="form__input" name="establishment" id="establishment" ref={register} />
                        <Form.Control value={id} className="form__input" name="id" id="id" ref={register} />
                    </Form.Group>

                    <Form.Group className="input--border">
                        <img src={userIcon}  className="input__icon" alt="user icon" />
                        <Form.Control className="form__input" name="clientName" id="clientName" placeholder="Full name" ref={register} />
                    </Form.Group>
                        {errors.clientName && <p className="form__p">{errors.clientName.message}</p>}
                         
                    <Form.Group className="input--border">
                        <img src={emailIcon}  className="input__icon" alt="Email icon" />
                        <Form.Control className="form__input" name="email" id="email" placeholder="Email" ref={register} />
                    </Form.Group>
                        {errors.email && <p className="form__p">{errors.email.message}</p>}

                    <Row style={{marginLeft: "-15px!important"}}>      
                        <Col xs={6}>
                            <Form.Group className="input--border">                                                  
                                <Form.Control className="form__input" name="checkin" defaultValue={checkinAsumption} id="checkin" placeholder="Check-in date" type="date" min={fullToday} ref={register}/>
                            </Form.Group>
                            {errors.checkin && <p className="form__p">{errors.checkin.message}</p>}
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="input--border">                                                                      
                                <Form.Control className="form__input" name="checkout" id="checkout" defaultValue={checoutAsumption} placeholder="Check-out date" type="date" min={fullTomorrow} ref={register}/>
                            </Form.Group>
                            {errors.checkout && <p className="form__p">{errors.checkout.message}</p>}
                        </Col>

                        <Col xs={6}>
                            <Form.Group className="input--border">                                                                   
                                <Form.Control as="select" custom className="form__input" name="adults" id="adults" defaultValue="Adults"  type="number" ref={register}>
                                    <option selected hidden value="-1">Adults</option>
                                    <OptionDisplayer maxGuests={maxGuests}/>
                                </Form.Control>
                            </Form.Group>
                            {errors.adults && <p className="form__p">{errors.adults.message}</p>}
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="input--border">                 
                                <Form.Control as="select" custom className="form__input" name="children" id="children" defaultValue="Children"  type="number" ref={register}>
                                    <option selected hidden value="">Children</option>
                                    <option value="0">0</option>
                                    <OptionDisplayer maxGuests={maxGuests}/>
                                </Form.Control>
                            </Form.Group>
                            {errors.child && <p className="form__p">{errors.child.message}</p>}
                        </Col>
                    </Row>  
                    <Form.Group className="input--border">      
                        <img src={msgIcon}  className="input__icon" alt="Message icon" />  
                        <Form.Control className="form__input" name="notes" id="notes" placeholder="Additional information (optional)" as="textarea" ref={register} />
                    </Form.Group>
                    <div className="button__container">
                        <Button className="card-button" type="submit">Book now!</Button>
                    </div>
                </Form>
            </Col>
        </>
    );
}

OrderPage.propTypes = {
   details: PropTypes.object.isRequired,
};
