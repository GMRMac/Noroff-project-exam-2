import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import {
    NavLink,
    withRouter,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ImageShowcase from "./ImageShowcase";
import "./StaysDetail.css";

 function StaysDetail({ details, history }){
    console.log(details, history)
     
    //Due to a bug it loads this components twice, to avoid crashing I solved it like this.
    if(details == null){
        return(
            <>
           </>
        )
    }
    
    const liGraph = require("../../../img/gfx/liGraph.svg"); // these are the different start, just for show.
    const oneOfFive = require("../../../img/gfx/1of5.svg");
    const twoOfFive = require("../../../img/gfx/2of5.svg");
    const fiveOfFive = require("../../../img/gfx/5of5.svg");
    const fourOfFive = require("../../../img/gfx/4of5.svg");
    const threeOfFive = require("../../../img/gfx/3of5.svg");
    const {establishmentName, description, establishmentEmail, imageUrl, price, maxGuests, selfCatering, id, additionalImageUrl} = details;
               console.log(additionalImageUrl)
        
    var splitDescription = description.split(",;,");
    return( 
        <div className="pageSpecific">
            <p className="p--small"><NavLink to="/">Home</NavLink> / {establishmentName}</p>
            <h1>{establishmentName}</h1>
            <img className="pageSpecific__stars" src={oneOfFive} alt="star icon"/>
            <img className="pageSpecific__stars" src={twoOfFive} alt="star icon"/>
            <img className="pageSpecific__stars" src={threeOfFive} alt="star icon"/>
            <img className="pageSpecific__stars" src={fourOfFive} alt="star icon"/>
            <img className="pageSpecific__stars" src={fiveOfFive} alt="star icon"/>
            <span>(63) - </span>
            <div className="button__container">
                <Button className="card-button" block  onClick={() => history.push(`/stays/${id}/order`)} >   Reserve now!   </Button>
            </div>
            <ImageShowcase imageUrl={imageUrl} additionalImageUrl={additionalImageUrl}/>
            <div className="button__container">
                <Button className="card-button" block   onClick={() => history.push(`/stays/${id}/order`)}>   Reserve now!   </Button>
            </div>
            <h2>Description</h2>
            <hr className="hr__header--small"/>
            {splitDescription.map(desc => {
                let randomKey = Math.random();
                return <p key={randomKey}> {desc} </p>
               })}
            <h2>Details</h2>
            <hr className="hr__header--small"/>
            <Row>
                <Col sm={6}><p><img src={liGraph} className="pageSpecific__liGraph" alt="list icon"/>Price: {price}€ per day</p></Col>
                <Col sm={6}>
                    <p><img src={liGraph} className="pageSpecific__liGraph" alt="list icon"/> Self catering: 
                        {(() => {
                            switch (selfCatering){
                                case "true":
                                    return " Yes";
                                case "false":
                                    return " No";
                                default:
                                    return null;
                            }
                        }
                        )()}
                </p>
            </Col>
            <Col sm={6}><p><img src={liGraph} className="pageSpecific__liGraph" alt="list icon"/>Max guests: {maxGuests}</p></Col>
            </Row>
            <h2>Contact</h2>
            <hr className="hr__header--small"/>
            <p>Email:<br/>{establishmentEmail}</p>
        </div>
    )
}
           
StaysDetail.propTypes = {
   details: PropTypes.object,
   history: PropTypes.object.isRequired,
};

export default withRouter(StaysDetail);