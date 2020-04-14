import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Admin(){
    const username = localStorage.getItem("userNmn");
    const password = localStorage.getItem("userPwd");
    const adminUsername = localStorage.getItem("user");
    const adminPassword = localStorage.getItem("password");
    console.log(username + ", " + adminUsername)
    
    if( username == adminUsername && password == adminPassword){
        return(
            <>
                <h1>Admin page</h1>
                <hr className="hr__header" />
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h2>Establishments</h2>
                                <hr className="hr__card" />
                                <Card.Text>
                                    Establishments overview.
                                </Card.Text>
                                <div className="button__container">
                                    <Button className="card-button" block onClick={() => window.location.href = `/admin/establishments`}> Overview </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </ Col >
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h2>Enquiries</h2>
                                <hr className="hr__card" />
                                <Card.Text>
                                    Enquiries overview.
                                </Card.Text>
                                <div className="button__container">
                                    <Button className="card-button" block onClick={() => window.location.href = `/admin/enquiries`}> Overview </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </ Col >
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h2>Support</h2>
                                <hr className="hr__card" />
                                <Card.Text>
                                    Contact form overview.
                                </Card.Text>
                                <div className="button__container">
                                    <Button className="card-button" block onClick={() => window.location.href = `/admin/support`}> Overview </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </ Col >
                </Row>
            </>
        )
    }
    testing();
}

function testing(){
    window.location.href = '../login';
}