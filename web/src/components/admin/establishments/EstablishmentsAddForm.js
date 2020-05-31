import React from "react";
import Form from "react-bootstrap/form";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import { ESTABLISHMENTS_DATA_SET } from "../../../constants/API";
import * as yup from "yup";
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/Row";

const schema = yup.object().shape({ // This field validates the form
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
    
    const msg = require("../../../img/gfx/msg.svg");
    const redX = require("../../../img/gfx/X_Red.svg");
    const check = require("../../../img/gfx/checkWhite.svg");
    const idIcon = require("../../../img/gfx/id.svg");
    const stayMax = require("../../../img/gfx/max.svg");
    const stayIcon = require("../../../img/gfx/user.svg");
    const stayPrice = require("../../../img/gfx/price.svg");
    const stayEmail = require("../../../img/gfx/email.svg");
    const stayImage = require("../../../img/gfx/imageUrl.svg");
    const stayPosLat = require("../../../img/gfx/posLat.svg");
    const stayPosLon = require("../../../img/gfx/posLon.svg");
    const addFormButton = require("../../../img/gfx/addButton.svg");
    
    function onSubmit(data){
        var description = document.getElementById("description"),
            descriptions = document.getElementsByTagName("textarea"),
            desciptionError = document.getElementById("desciptionError"),
            inputAdditional = document.getElementsByClassName("form__input--additionalUrl");
        
        if(description.value === ""){
            desciptionError.classList.remove("hidden");
        } else {
            desciptionError.classList.add("hidden");
            var formData = new FormData(),
                descriptionArray = [data.description];
            for(var desc of descriptions){
                if(desc.value === data.description){
                } else {
                    descriptionArray.push(";"); // This ";" is to make a pattern in the PHP so that I can split content by ",;," as "," is a common sign to use in a sentence
                    descriptionArray.push(desc.value);
                }
            }
            
            if(inputAdditional[0]){ //Checks if aditional image links are present
                var inputArray = [];
                for(var input of inputAdditional){
                    inputArray.push(";");
                    inputArray.push(input.value)
                }
                formData.append("additionalImageUrl",inputArray)
            }
            
            formData.append("establishmentName", data.establishmentName);
            formData.append("establishmentEmail", data.establishmentEmail);
            formData.append("imageUrl", data.imageUrl);
            formData.append("price", data.price);
            formData.append("maxGuests", data.maxGuests);
            formData.append("googleLat", data.googleLat);
            formData.append("googleLong", data.googleLong);
            formData.append("selfCatering", data.selfCatering);
            formData.append("id", data.id);
            formData.append("description",descriptionArray);
            
            
            fetch(ESTABLISHMENTS_DATA_SET,{
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
//    console.log(fetch("../../../../../../server/add-establishments-success.php"))
    
    function addImgUrl(data){
        var container = document.getElementsByClassName("imageUrlContainer")[0],   
            imagefields = document.getElementsByClassName("form__input--img").length;
        let imgNode = document.createElement("img"),
            inputNode = document.createElement("input"),
            containerNode = document.createElement("div");
        
        imgNode.src = redX;
        imgNode.classList.add("input__icon","redXinput");
        imgNode.id = "img-"+imagefields;
        
        inputNode.namne = "imageUrl";
        inputNode.placeholder = "Additional image url";
        inputNode.id = "imageUrl"+imagefields;
        inputNode.classList.add("form__input","form-control","form__input--additionalUrl");
        
        containerNode.classList.add("input--border","form-group","input--additional");
        containerNode.id = "descriptionContainer"+imagefields
        
        containerNode.appendChild(imgNode);
        containerNode.appendChild(inputNode);
        container.appendChild(containerNode);
        
        var allRedX = document.getElementsByClassName("redXinput"),
            eventObj = {
            handleEvent(e) {
                var imgId = e.target.id.split("-"),
                    imgIdOne = Number(imgId[1]),
                    imagefield = document.getElementsByClassName("input--additional")[imgIdOne-1];
                
                imagefield.remove();
                var imgs = document.getElementsByClassName("redXinput"),
                    imageCounter = 1;
                if(imgs){
                    console.log(imagefield)
                    for(var img of imgs){
                        img.id = "img-" + imageCounter;
                        imageCounter++;
                    }
                }
            }
        }
        var ij = 0;
        for(var X of allRedX){
            allRedX[ij].addEventListener("click", eventObj)
            ij++;
        }
    }
    
    function addTextField(data){
        var container = document.getElementById("textarea__container"),
            textfields = document.getElementsByTagName("textarea").length;
        let imgNode = document.createElement("img"),
            textareaNode = document.createElement("textarea"),
            containerNode = document.createElement("div");
        
        imgNode.src = redX;
        imgNode.classList.add("input__icon","redX");
        imgNode.id = "img-"+textfields;
        
        textareaNode.name= "description";
        textareaNode.placeholder = "Addition description";
        textareaNode.rows = 8;
        textareaNode.id = "description"+textfields;
        textareaNode.classList.add("form__input","form-control");
        
        containerNode.classList.add("input--border","form-group","textarea--additional");
        containerNode.id = "descriptionContainer"+textfields
        
        containerNode.appendChild(imgNode);
        containerNode.appendChild(textareaNode);
        container.appendChild(containerNode);
        
        var allRedX = document.getElementsByClassName("redX"),
            eventObj = {
            handleEvent(e) {
                var imgId = e.target.id.split("-"),
                    imgIdOne = Number(imgId[1]),
                    textField = document.getElementsByClassName("textarea--additional")[imgIdOne-1];
                
                textField.remove();
                var imgs = document.getElementsByClassName("redX"),
                    imageCounter = 1;
                if(imgs){
                    console.log(textField)
                    for(var img of imgs){
                        img.id = "img-" + imageCounter;
                        imageCounter++;
                    }
                }
            }
        }
        var ij = 0;
        for(var X of allRedX){
            allRedX[ij].addEventListener("click", eventObj)
            ij++;
        }
    }
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="input--border">
                    <img src={stayIcon}  className="input__icon" alt="user icon" />
                    <Form.Control className="form__input" name="establishmentName" id="establishmentName" placeholder="Establishment name" ref={register} />
                </Form.Group>
                {errors.establishmentName && <p className="form__p">{errors.establishmentName.message}</p>}
                <Form.Group className="input--border">  
                    <img src={stayEmail}  className="input__icon" alt="email icon" />
                    <Form.Control className="form__input" name="establishmentEmail" id="establishmentEmail" placeholder="Establishment@email" ref={register}/>
                </Form.Group>
                {errors.establishmentEmail && <p className="form__p">{errors.establishmentEmail.message}</p>}
                <Row>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPrice}  className="input__icon" alt="price icon" />
                            <Form.Control type="number" className="form__input" name="price" id="price" placeholder="Price" ref={register}/>
                        </Form.Group> 
                        {errors.price && <p className="form__p">{errors.price.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayMax}  className="input__icon" alt="max amount icon" />
                            <Form.Control type="number" className="form__input" name="maxGuests" id="maxGuests" placeholder="Max guests" ref={register}/>
                        </Form.Group>
                        {errors.maxGuests && <p className="form__p">{errors.maxGuests.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPosLat}  className="input__icon" alt="latitude icon" />
                            <Form.Control type="number" step="0.000001" className="form__input" name="googleLat" id="googleLat" placeholder="googleLat" ref={register}/>
                        </Form.Group>
                        {errors.googleLat && <p className="form__p">{errors.googleLat.message}</p>}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="input--border">  
                            <img src={stayPosLon}  className="input__icon" alt="longitude icon" />
                            <Form.Control type="number" step="0.000001" className="form__input" name="googleLong" id="googleLong" placeholder="googleLong" ref={register}/>
                        </Form.Group>
                        {errors.googleLong && <p className="form__p">{errors.googleLong.message}</p>}
                    </Col>
                </Row>
                <Form.Group className="input--border">                                                
                    <Form.Control as="select" custom className="form__input" name="selfCatering" id="selfCatering" defaultValue="Children" ref={register}>
                        <option selected hidden>Self catering? Yes/No?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>
                </Form.Group>
                {errors.selfCatering && <p className="form__p">{errors.selfCatering.message}</p>}
                <Form.Group className="input--border">  
                    <img src={idIcon}  className="input__icon" alt="id icon" />
                    <Form.Control className="form__input" name="id" id="id" value={Number(arrayLength+1)} disabled ref={register}/>
                </Form.Group>
                <Form.Group className="input--border">  
                    <img src={stayImage}  className="input__icon" alt="img icon" />
                    <Form.Control className="form__input form__input--img" name="imageUrl" id="imageUrl" placeholder="Image url, e.g. https://via.placeholder.com/350x150" ref={register}/>
                </Form.Group>   
                {errors.imageUrl && <p className="form__p">{errors.imageUrl.message}</p>}
                <div className="imageUrlContainer">
                </div>
                 <div className="form__img--add-container">
                    <div><img className="form__img--add"  src={addFormButton} onClick={addImgUrl} alt="add icon" /></div>
                <p>Add another image.</p>
                </div>
                    <Form.Group className="input--border">
                        <img src={msg}  className="input__icon" alt="msg icon" />      
                        <Form.Control className="form__input" name="description" id="description" placeholder="Description" as="textarea" rows="8" ref={register} />
                    </Form.Group>
                <div id="textarea__container">
                </div>
                <p className="form__p hidden" id="desciptionError">A description must be set</p>
                <div className="form__img--add-container">
                    <div><img className="form__img--add"  src={addFormButton} onClick={addTextField} alt="add icon" /></div>
                    <p>Add another text section.</p>
                </div>
                <div className="button__container" style={{marginBottom: "80px"}}>
                    <Button className="card-button" type="submit">Submit form!</Button>
                </div>
            </Form>
        </Col>
    )
}
                         
EstablishmentsAddForm.propTypes = {
    arrayLength: PropTypes.object.isRequired,
}