import React from 'react'
import './Skills.css'

export default function Skills () {
    return(
        <div className="skills" id="skills">
	 	<div className="description">
	 		<h3> Skills </h3>
	 		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-12">   
				    <dl>
				    <dt>Web Development</dt>
					<dd>- React</dd>
					<dd>- Redux</dd>
					<dd>- Jquery</dd>
					<dd>- Javascript ES6</dd>
					<dd>- HTML</dd>
					<dd>- CSS</dd>
					<dd>- SCSS, SASS</dd>					
					<dd>- Bootstrap</dd>
					</dl>
				</div>	
	            <div className="col-lg-4 col-md-4 col-sm-12">
					<dl>
					<dt>Graphic design software</dt>
					<dd>- Avocode</dd>
					<dd>- Basic knowledge of Adobe Photoshop</dd>
					<dd>- Basic knowledge of Adobe Illustrator</dd>
					</dl>
				</div>
			</div>
        </div>
	 </div>
    );
}