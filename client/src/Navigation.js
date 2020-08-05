import React, { Component } from 'react'
import './Navigation.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import {Navbar, Nav, Container} from "react-bootstrap"

export default class Navigation extends Component {
    render() {
    return (
        <div>
        <Navbar className="navbar" fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
        <Container fluid>
            <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav>				    		    		    
                <ul className="nav navbar-nav"> 
                    <li className="nav-item">
                    <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-70}>                                
                    Обо мне                       
                    </Link>  
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-70}>                                                                   
                    Умения      
                    </Link> 
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" activeClass="active" to="education" spy={true} smooth={true} duration={500} offset={-70}>                                          
                    Обучение                                     
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} offset={-70}>                                          
                    Портфолио                                     
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-70}>                                         
                    Контакты                 
                    </Link>
                    </li>
                </ul>   
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
    }
    
}