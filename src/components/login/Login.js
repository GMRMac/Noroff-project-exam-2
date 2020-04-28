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


const schema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required"),
	password: yup
		.string()
		.min(3, "The password must consist of 3 or more symbols.")
		.max(32, "The password can't exceed the amount of 32 symbols.")
        .required("Please enter a password"),
});

export default function Contact(){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    const stayIcon = require("../../img/gfx/user.svg");
    const keyIcon = require("../../img/gfx/key.svg");
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="input--border">
                    <img src={stayIcon}  className="input__icon"  />
                    <Form.Control className="form__input" name="username" id="username" placeholder="Enter username" ref={register}/>
                </Form.Group>
                    {errors.username && <p className="form__p">{errors.username.message}</p>}
                                                                                 
                <Form.Group className="input--border">      
                    <img src={keyIcon}  className="input__icon"  />                                              
                    <Form.Control className="form__input" name="password" id="password" type="password" placeholder="Enter password" ref={register}/>
                </Form.Group>
                    {errors.password && <p className="form__p">{errors.password.message}</p>}
                
                <div className="button__container">
                    <Button className="card-button" type="submit" onClick={onSubmitFunction}>Submit form!</Button>
                </div>
            </Form>
        </Col>
    );
}

function onSubmitFunction(data){
    var password = document.getElementById("password"),
        user = document.getElementById("username");
    console.log(password.value)
    localStorage.setItem("userPwd", password.value)
    console.log(user.value)
    localStorage.setItem("userNmn", user.value)
    
    // Dop
    if (user.value === localStorage.getItem("user") && password.value === localStorage.getItem("password")){
        window.location.href = '../admin';
    }
}
                     
function onSubmit(data){
    console.log("data", data);
}