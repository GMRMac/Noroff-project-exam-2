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
import Login from "../login/Login";
import StaysDetailContainer from "../stays/detail/StaysDetailContainer";
import OrderPageContainer from "../stays/order/OrderPageContainer";
import "./Layout.css";
import Footer from "./Footer";
import Admin from "../admin/Admin";
import Establishments from "../admin/establishments/Establishments";
import Enquiries from "../admin/enquiries/Enquiries";
import Support from "../admin/contact/Contact";


export default function Layout() {
        localStorage.setItem('user', "badmin");
        localStorage.setItem('password', "root");
    
        console.log("hi");
        return (
                <Router>
                    <Container>
                        <Navbar expand="lg">
                            <NavLink to="/" exact>    
                                <Navbar.Brand className=" d-lg-none">HOLIDAZE</Navbar.Brand>
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink to="/contact/" className="nav-link">Contact us</NavLink>
                                    <NavLink to="/" exact className="nav-link">Stays</NavLink>
                                    <NavLink to="/" exact>    
                                        <Navbar.Brand className="d-none d-lg-block">HOLIDAZE</Navbar.Brand>
                                    </NavLink>
                                    <NavLink to="/login/" className="nav-link">Login</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/login" component={Login} />
                            <Route path="/admin" exact component={Admin} />
                            <Route path="/admin/establishments" exact component={Establishments} />
                            <Route path="/admin/enquiries" exact component={Enquiries} />
                            <Route path="/admin/support" exact component={Support} />
                            <Route path="/stays/:id" exact component={StaysDetailContainer} />
                            <Route path="/stays/:id/order" exact component={OrderPageContainer} />
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