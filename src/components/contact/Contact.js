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
            <h1>Contact us</h1>
            <Form method="POST" action="http://localhost/hotel-booking/server/contact-success.php">
                <Form.Group className="input--border">
                    <Form.Control className="form__input" name="clientName" id="clientName" placeholder="Full name" ref={register} />
                </Form.Group>
                    {errors.firstName && <p className="form__p">{errors.firstName.message}</p>}
                                                                                 
                <Form.Group className="input--border">                                                    
                    <Form.Control className="form__input" name="email" id="email" placeholder="Enter your email" ref={register}/>
                </Form.Group>
                    {errors.lastName && <p className="form__p">{errors.lastName.message}</p>}
                     
                <Form.Group className="input--border">
                    <Form.Control name="message" id="" placeholder="Enter your message" className="form__input" as="textarea" rows="3" />
                </Form.Group>
                
                <div className="button__container">
                    <Button className="card-button" type="submit">Submit form!</Button>
                </div>
            </Form>
        </Col>
    );
}

    function onSubmit(data){
        console.log("data", data);
    }