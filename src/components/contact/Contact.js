import React from "react";
import Form from "react-bootstrap/form";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import FormControl from "react-bootstrap/formcontrol";
import Col from "react-bootstrap/col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import "./Contact.css";
import axios from "axios"


const schema = yup.object().shape({
	clientName: yup
        .string()
        .required("Name is required"),
	email: yup
        .string()
        .email("Please enter a valid email.")
        .required("Email is required"),
});

export default function Contact(){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })

    
    const stayIcon = require("../../img/gfx/user.svg");
    const stayEmail = require("../../img/gfx/email.svg");
    const msg = require("../../img/gfx/msg.svg");
    
    
    function onSubmit(data){
        var message = document.getElementById("message").value,
            clientName = document.getElementById("clientName").value,
            email = document.getElementById("email").value,
            textareaP = document.getElementById("textareaValidate");
        console.log(message);
        console.log(data);
//        
        console.log(textareaP.className.length);
        
        if(message !== ""){
            
            
            var formData = new FormData();
            formData.append("clientName", clientName)
            formData.append("email", data.email)
            formData.append("message", message)
//            console.log(formData)

            fetch("http://localhost:80/hotel-booking/server/contact-success.php", {
                method:"POST",
                body: formData
            }).then(function(response){
                return response;
            }).then(function(data){
                console.log(data); 
                window.location.href = "/contactSuccess/";
            })
        } else {
            textareaP.classList.remove("hidden")
        }
    }
    return(
        <Col sm={{span:6, offset: 3}}>
            <h1>Contact us</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="input--border">
                    <img src={stayIcon}  className="input__icon"  />
                    <Form.Control className="form__input" name="clientName" id="clientName" placeholder="Full name" ref={register} />
                </Form.Group>
                    {errors.clientName && <p className="form__p" id="errorClientName">{errors.clientName.message}</p>}
                                                                                 
                <Form.Group className="input--border"> 
                    <img src={stayEmail} className="input__icon" />                                                   
                    <Form.Control className="form__input" name="email" id="email" placeholder="Enter your email" ref={register}/>
                </Form.Group>
                    {errors.email && <p className="form__p">{errors.email.message}</p>}
                     
                <Form.Group className="input--border">
                    <img src={msg} className="input__icon"/>     
                    <Form.Control name="message" id="message" placeholder="Enter your message" className="form__input" rows="8" as="textarea" rows="3" />
                </Form.Group>
                     <p className="form__p hidden" id="textareaValidate">Please enter your message.</p>
                <div className="button__container">
                    <Button className="card-button" type="submit">Submit form!</Button>
                </div>
                <p ></p>
            </Form>
        </Col>
    );
}

                     
//function contactSubmit(data){
//    var clientName1 = document.getElementsByClassName("form__p"),
//        message = document.getElementById("message");
//    
//        
//    console.log("hello world" + clientName1)
//    if(clientName1[0] == null){
//        setTimeout(function(){
//            var clientName2 = document.getElementsByClassName("form__p");
//            if(clientName2[0] == null){
//                console.log("Can you see me?")
//            }
//        }, 1)
//        if(message.value == ""){
//            console.log("I am empty boio")
//        }
//        console.log("this you can see");
//    }
//}