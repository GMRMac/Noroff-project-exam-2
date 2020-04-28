import React from "react";
import Form from "react-bootstrap/form";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import FormControl from "react-bootstrap/formcontrol";
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/Row";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

const schema = yup.object().shape({
	establishmentName: yup
        .string()
        .required("Establishment name is required"),
	establishmentEmail: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
	imageUrl: yup
        .string()
        .required("Image url is required, e.g. https://via.placeholder.com/350x150"),
	price: yup
        .number()
        .required("Price is required"),
	maxGuests: yup
        .number()
        .integer()
        .required("Max guests is required"),
	googleLat: yup.number()
        .max(180)
        .min(-180)
        .required("Google longitude required"),
	googleLong: yup.number()
        .max(88)
        .min(-88)
        .required("Google longitude required"),
	selfCatering: yup
        .bool("Self catering must be specified")
        .required("Price is required"),
});

export default function EstablishmentsAddForm({arrayLength}){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    
    const X = require("../../../img/pic/debatten.png");
    const redX = require("../../../img/gfx/X_Red.svg");
    const stayIcon = require("../../../img/gfx/user.svg");
    const stayEmail = require("../../../img/gfx/email.svg");
    const stayImage = require("../../../img/gfx/imageUrl.svg");
    const stayPrice = require("../../../img/gfx/price.svg");
    const stayMax = require("../../../img/gfx/max.svg");
    const stayPosLat = require("../../../img/gfx/posLat.svg");
    const stayPosLon = require("../../../img/gfx/posLon.svg");
    const arrowDown = require("../../../img/gfx/arrow_down_gradient.svg");
    const idIcon = require("../../../img/gfx/id.svg");
    const msg = require("../../../img/gfx/msg.svg");
    const check = require("../../../img/gfx/checkWhite.svg");
    const addFormButton = require("../../../img/gfx/addButton.svg");
    var successAlert = localStorage.getItem("addSuccessful");
    
    var testing35 = document.getElementById("alertOK");
    
    setTimeout(function(){
        localStorage.removeItem("addSuccessful")
    }, 100)
    
    
    console.log(testing35);
    
    console.log(successAlert);
    function onSubmit(data){
        console.log(data)
        var desciptionError = document.getElementById("desciptionError"),
            description = document.getElementById("description");
            
        
        if(description.value == ""){
            desciptionError.classList.remove("hidden");
        } else {
            var formData = new FormData();
            formData.append("establishmentName", data.establishmentName);
            formData.append("establishmentEmail", data.establishmentEmail);
            formData.append("imageUrl", data.imageUrl);
            formData.append("price", data.price);
            formData.append("maxGuests", data.maxGuests);
            formData.append("googleLat", data.googleLat);
            formData.append("googleLong", data.googleLong);
            formData.append("selfCatering", data.selfCatering);
            formData.append("id", data.id);
            formData.append("description", data.description);
            
            fetch("http://localhost/hotel-booking/server/add-establishments-success.php",{
                 method: "POST",
                 body: formData
            }).then(function(response){
                return response;
            }).then(function(data){
                console.log(data);
                localStorage.setItem("addSuccessful", "You have successfully added an establishment!");
                localStorage.setItem("addSuccessful2", "You have successfully added an establishment!");
                window.location.href = "/admin/establishments/";
            })
            
        }
    }
    
    function addTextField(data){
        var textfields = document.getElementsByTagName("textarea").length,
            container = document.getElementById("textarea__container");
        console.log(textfields);
        
        container.innerHTML += `
            <div class="input--border form-group">
                <img src="`+ redX +`" class="input__icon">
                <textarea name="description" placeholder="Description ` + textfields + `" rows="8" id="description" class="form__input form-control"></textarea>
            </div>
        `
    }
    
    console.log(successAlert)
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="input--border">
                    <img src={stayIcon}  className="input__icon"  />
                    <Form.Control className="form__input" name="establishmentName" id="establishmentName" placeholder="Establishment name" ref={register} />
                </Form.Group>
                    {errors.establishmentName && <p className="form__p">{errors.establishmentName.message}</p>}
                                                                                 
                <Form.Group className="input--border">  
                    <img src={stayEmail}  className="input__icon"  />
                    <Form.Control className="form__input" name="establishmentEmail" id="establishmentEmail" placeholder="Establishment@email" ref={register}/>
                </Form.Group>
                    {errors.establishmentEmail && <p className="form__p">{errors.establishmentEmail.message}</p>}
                                                                                  
                <Form.Group className="input--border">  
                    <img src={stayImage}  className="input__icon"  />
                    <Form.Control className="form__input" name="imageUrl" id="imageUrl" placeholder="Image url, e.g. https://via.placeholder.com/350x150" ref={register}/>
                </Form.Group>   
                    {errors.imageUrl && <p className="form__p">{errors.imageUrl.message}</p>}
                
                <Row>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPrice}  className="input__icon"  />
                            <Form.Control type="number" className="form__input" name="price" id="price" placeholder="Price" ref={register}/>
                        </Form.Group> 
                        {errors.price && <p className="form__p">{errors.price.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayMax}  className="input__icon"  />
                            <Form.Control type="number" className="form__input" name="maxGuests" id="maxGuests" placeholder="Max guests" ref={register}/>
                        </Form.Group>
                        {errors.maxGuests && <p className="form__p">{errors.maxGuests.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPosLat}  className="input__icon"  />
                            <Form.Control type="number" step="0.000001" className="form__input" name="googleLat" id="googleLat" placeholder="googleLat" ref={register}/>
                        </Form.Group>
                        {errors.googleLat && <p className="form__p">{errors.googleLat.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPosLon}  className="input__icon"  />
                            <Form.Control type="number" step="0.000001" className="form__input" name="googleLong" id="googleLong" placeholder="googleLong" ref={register}/>
                        </Form.Group>
                        {errors.googleLong && <p className="form__p">{errors.googleLong.message}</p>}
                    </Col>
                </Row>
                
                <Form.Group className="input--border">                                                
                    <Form.Control as="select" custom className="form__input" name="selfCatering" id="selfCatering" defaultValue="Children" ref={register}>
                        <option selected hidden>Yes/No?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>
                </Form.Group>
                {errors.selfCatering && <p className="form__p">{errors.selfCatering.message}</p>}
        
                <Form.Group className="input--border">  
                    <img src={idIcon}  className="input__icon"  />
                    <Form.Control className="form__input" name="id" id="id" value={Number(arrayLength+1)} disabled ref={register}/>
                </Form.Group>
                
                <div id="textarea__container">
                    <Form.Group className="input--border">
                        <img src={msg}  className="input__icon"  />      
                        <Form.Control className="form__input" name="description" id="description" placeholder="Description" as="textarea" rows="8" ref={register} />
                    </Form.Group>
                </div>
                <p className="form__p hidden" id="desciptionError">A description must be set</p>
                
                <div className="form__img--add-container">
                <div><img className="form__img--add"  src={addFormButton} onClick={addTextField}/></div>
                    <p>Add another text section.</p>
                </div>
                 
                <div className="button__container" style={{marginBottom: "80px"}}>
                    <Button className="card-button" type="submit">Submit form!</Button>
                </div>
            </Form>
        </Col>
    );
}

EstablishmentsAddForm.propTypes = {
    arrayLength: PropTypes.object.isRequired,
}