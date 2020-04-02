import React from "react"
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function StaysItem({id, name, image, history}){
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <h2>{name}</h2>
                <hr className="hr__card" />
                <Card.Text>
                    Here comes plentiful o' text
                </Card.Text>
                <div className="button__container">
                    <Button className="card-button" block onClick={() => history.push(`/stays/${id}`)} > View details! </Button>
                </div>
            </Card.Body>
        </Card>
    
    
    );
}

StaysItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(StaysItem);