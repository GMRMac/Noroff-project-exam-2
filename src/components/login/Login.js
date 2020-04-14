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
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Email is required"),
	age: yup
		.number()
		.required()
		.integer()
		.min(10, "Age must be greater than 10")
		.max(30, "Age must be less than 10")
});

export default function Contact(){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <h1>Login</h1>
            <Form>
                <Form.Group className="input--border">
                    <Form.Control className="form__input" name="username" id="username" placeholder="Enter username" ref={register}/>
                </Form.Group>
                    {errors.firstName && <p className="form__p">{errors.firstName.message}</p>}
                                                                                 
                <Form.Group className="input--border">                                                    
                    <Form.Control className="form__input" name="password" id="password" placeholder="Enter password" ref={register}/>
                </Form.Group>
                    {errors.lastName && <p className="form__p">{errors.lastName.message}</p>}
                
                <div className="button__container">
                    <Button className="card-button" onClick={onSubmitFunction}>Submit form!</Button>
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