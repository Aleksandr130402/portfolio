import React, { Component } from 'react'
import './Header.css'
import Avatar from './portfolio-images/photo_3.jpg'
import { Link, animateScroll as scroll } from "react-scroll"

export default class Header extends Component {
    render() {
        return (
            
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-img-wrap">
                        <div className="about-img">                                                
                        <img className="img-fluid"
                            src={Avatar}
                            alt="avatar"
                            />
                        </div>                                                
                    </div>                 
                    <div className="col-md-6">
                        <div className="about-me">
                            <div className="about-me-title">
                            <h4> Привет. </h4>
                            </div>	
                            <div className="about-me-text">	        
                            <p className="text-left">
                            Меня зовут Александр. Мне 21, я начинающий frontend developer.
                            Готов работать в команде и создавать крутые сайты вместе с вами. 
                            </p>
                            </div>                
                        
                            <div className="about-me-info">
                            <p>
                                <span className="span-title">Email</span>
                                <span>businessmail1304@gmail.com</span>
                            </p>
                            <p>
                                <span className="span-title">Phone</span>
                                <span>+(380)95-71-33-325</span>
                            </p>
                            <p>
                                <span className="span-icons">
                                    <a target="_blank" href="https://github.com/Aleksandr130402" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                    </a>
                                    <a target="_blank" href="https://codepen.io/aleksandr130402" rel="noopener noreferrer">
                                    <i className="fab fa-codepen"></i> 
                                    </a>
                                </span>
                            </p>
                            </div>
                            <div className="contact-me-btn">
                                <Link style={{"color": "#fff"}} className="site-btn" activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-70}>
                                    Contact me
                                </Link>
                            </div>                          
                        </div>
                    </div>               
                </div>
            </div>
        </div>
            
        )
    }
    
}