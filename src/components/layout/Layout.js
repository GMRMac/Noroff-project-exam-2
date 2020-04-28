import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import CharacterDetailContainer from "../characters/detail/CharacterDetailContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import ContactSuccess from "../contactSuccess/ContactSuccess";
import Login from "../login/Login";
import StaysDetailContainer from "../stays/detail/StaysDetailContainer";
import OrderPageContainer from "../stays/order/OrderPageContainer";
import OrderSuccess from "../stays/orderSuccess/OrderSuccess";
import "./Layout.css";
import Footer from "./Footer";
import Admin from "../admin/Admin";
import Establishments from "../admin/establishments/Establishments";
import Enquiries from "../admin/enquiries/Enquiries";
import Support from "../admin/contact/Contact";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import f404 from "../404/404"


export default function Layout() {
        localStorage.setItem('user', "badmin");
        localStorage.setItem('password', "root");
    
        console.log("hi");
        return (
                <Router>
                    <Container>
                        <Navbar expand="lg" id="navGreie">
                            <NavLink to="/" exact>    
                                <Navbar.Brand className=" d-lg-none">HOLIDAZE</Navbar.Brand>
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={{width: "100%"}}>
                                    <Row style={{width: "100%", display: "block-inline"}}>
                                        <Col sm={2} style={{textAlign: "right", marginTop: "20px"}}><NavLink to="/contact/" className="nav-link">Contact us</NavLink></Col>
                                        <Col sm={2} style={{textAlign: "right", marginTop: "20px"}}><NavLink to="/" exact className="nav-link">Home</NavLink></Col>
                                        <Col sm={4}><NavLink to="/" exact>    
                                            <Navbar.Brand className="d-none d-lg-block">HOLIDAZE</Navbar.Brand>
                                        </NavLink></Col>
                                        <Col sm={2} style={{textAlign: "left", marginTop: "20px"}}><NavLink to="/login/" className="nav-link">Login</NavLink></Col>
                                    </Row>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/contactSuccess" component={ContactSuccess} />
                            <Route path="/login" component={Login} />
                            <Route path="/admin" exact component={Admin} />
                            <Route path="/admin/establishments" exact component={Establishments} />
                            <Route path="/admin/enquiries" exact component={Enquiries} />
                            <Route path="/admin/support" exact component={Support} />
                            <Route path="/stays/:id" exact component={StaysDetailContainer} />
                            <Route path="/stays/:id/order" exact component={OrderPageContainer} />
                            <Route path="/stays/:id/order/success" exact component={OrderSuccess} />
                            <Route path="/" component={f404} />
                        </Switch>
                    </Container>
                    <footer>
                        <Container>
                            <h1>HOLIDAZE</h1>
                            <hr className="hr__footer"/>
                            <h2 className="h2__footer">Usefull links</h2>
                            <p className="p__footer"><NavLink to="/" exact>Home</NavLink></p>
                            <p className="p__footer"><NavLink to="/contact/">Contact</NavLink></p>
                            <p className="p__footer"><NavLink to="/login/">Login</NavLink></p>
                        </Container>
                    </footer>
                </Router>
        );
}