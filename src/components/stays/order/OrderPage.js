import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/form";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import FormControl from "react-bootstrap/formcontrol";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import OptionDisplayer from "./OptionDisplayer";


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

export default function OrderPage( {details} ){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    console.log(details);
    if(details == null){
        return(<></>)
    }
    const {establishmentName,maxGuests} = details;
               
    const testDate = new Date();
             
    return(
        <Col sm={{span:6, offset: 3}}>
            <h1>{establishmentName}</h1>
            <Form method="POST" action="http://localhost/hotel-booking/server/enquiry-success.php">
                <Form.Group className="input--border" hidden>
                    <Form.Control value={establishmentName} className="form__input" name="establishment" id="establishment" placeholder="Full name" ref={register} />
                </Form.Group>
               
                <Form.Group className="input--border">
                    <Form.Control className="form__input" name="clientName" id="clientName" placeholder="Full name" ref={register} />
                </Form.Group>
                    {errors.firstName && <p className="form__p">{errors.firstName.message}</p>}
               
                <Form.Group className="input--border">
                    <Form.Control className="form__input" name="email" id="email" placeholder="Email" ref={register} />
                </Form.Group>
                    {errors.firstName && <p className="form__p">{errors.firstName.message}</p>}

                <Row>      
                    <Col sm={6}>
                        <Form.Group className="input--border">                                                    
                            <Form.Control className="form__input" name="checkin" id="checkin" placeholder="Check-in date" type="date" ref={register}/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">                                                    
                            <Form.Control className="form__input" name="checkout" id="checkout" placeholder="Check-out date" type="date" ref={register}/>
                        </Form.Group>
                    </Col>
                        {errors.lastName && <p className="form__p">{errors.lastName.message}</p>}
                    
                    <Col sm={6}>
                        <Form.Group className="input--border">                                                    
                            <Form.Control as="select" custom className="form__input" name="adults" id="adults" defaultValue="Adults"  type="number" ref={register}>
                                <option selected hidden>Adults</option>
                                <OptionDisplayer maxGuests={maxGuests}/>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">                                                    
                            <Form.Control as="select" custom className="form__input" name="children" id="children" defaultValue="Children"  type="number" ref={register}>
                                <option selected hidden>Children</option>
                                <option value="0">0</option>
                                <OptionDisplayer maxGuests={maxGuests}/>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>  
                <Form.Group className="input--border">
                    <Form.Control className="form__input" name="notes" id="notes" placeholder="Additional information (optional)" as="textarea" ref={register} />
                </Form.Group>
                <div className="button__container">
                    <Button className="card-button" type="submit">Submit form!</Button>
                </div>
            </Form>
        </Col>
    );
}

OrderPage.propTypes = {
   details: PropTypes.object.isRequired,
};
    function onSubmit(data){
        console.log("data", data);
    }