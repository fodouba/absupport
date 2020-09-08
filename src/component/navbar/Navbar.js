import React, { Component } from "react";
import logoA from '../../logoAbsup.png'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'

class NavbarPage extends Component {

render() {
return (
        
            <Navbar bg="primary" expand="lg">
            <Navbar.Brand>
             <img src={logoA} alt="logo accueil" />
             <h6>Africall <span id="b">Business</span> <span id="sup">Support</span></h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
               <Link to="/quinousomme" className="nav-link">Qui somme-nous?</Link>
               <Link to="/nosPrestations" className="nav-link">Nos prestations</Link>
               <Link to="/NosEngagements" className="nav-link">Nos engagements</Link>
               <Link to="/Contactes" className="nav-link">Contactes</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        
       
    )
}
}

export default NavbarPage;
                