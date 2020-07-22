import React from 'react';
import './Portfolio.css';
import Portfolio_1 from "./portfolio-images/portfolio-1.png";
import Portfolio_2 from "./portfolio-images/portfolio-2.png";
import Portfolio_3 from "./portfolio-images/portfolio-3.png";

export default function Portfolio () {
    return(
    <div className="portfolio" id="portfolio">
		<h3> Portfolio </h3>
        <div className="row">
        <div className="col-md-3 col-sm-12 col-xs-12">
            <a href="https://codepen.io/aleksandr130402/pen/LYGyrxV" className="portfolio-box">
            <div className="portfolio-scale">
                <img src={Portfolio_1} alt="portfolio-1" className="img-fluid portfolio-scale"/>
            </div>
            <div className="portfolio-name text-center">
                <span>App “Pomodoro Clock”</span>
            </div>
            </a>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12">
            <a href="https://codepen.io/aleksandr130402/pen/WNremgp" className="portfolio-box">
            <div className="portfolio-scale">
                <img src={Portfolio_2} alt="portfolio-2" className="img-fluid portfolio-scale"/>
            </div>
            <div className="portfolio-name text-center">
                <span>App "JS Calculater"</span>
            </div>
            </a>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12">
            <a href="https://codepen.io/aleksandr130402/pen/mdVByeK" className="portfolio-box">
            <div className="portfolio-scale">
                <img src={Portfolio_3} alt="portfolio-3" className="img-fluid portfolio-scale"/>
            </div>
            <div className="portfolio-name text-center">
                <span>App "Drum Machine"</span>
            </div>
            </a>
        </div>
        </div> 
		<p> В настоящее время обучаюсь на сайте <span><a href="https://www.freecodecamp.org/">www.freecodecamp.org</a></span>.</p>
	</div>     
    )
}