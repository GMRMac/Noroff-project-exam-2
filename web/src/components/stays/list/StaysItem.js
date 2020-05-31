import React from "react"
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function StaysItem({id, name, image, history, description}){
    var cardContent = "";
    const myStyle = {backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover"}
    
    for(var i = 0; i < 64; i++){
        if(description[i] === undefined){
        } else {
            cardContent = cardContent + description[i]
        }
    }

    return (
        <Card>
            <div style={myStyle} className="card-img-top"></div>
            <Card.Body>
                <h2>{name}</h2>
                <hr className="hr__card" />
                <Card.Text>
                    {cardContent}...
                </Card.Text>
                <div className="button__container">
                    <Button className="card-button" block onClick={() => history.push(`/stays/${id}`)} > View details! </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

StaysItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(StaysItem);