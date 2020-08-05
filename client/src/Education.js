import React, {Component} from 'react'
import './Education.css'

export default class Education extends Component {
    render() {
        return (
            <div className="education" id="aducation">
		        <h3 className="education-title"> Education </h3>           
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <dl>
                    <dt> Киевский колледж компьютерных технологий и экономики </dt>          
                        <div className="education-about">
                        <dd> 2014 - 2018</dd>
                        
                        <dd> Обслуживание компьютерных сетей и систем </dd>
                        </div>
                    </dl>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <dl>
                    <dt> Национальный авиационный университет </dt>
                        <div className="education-about">
                        <dd> 2018 - 2023</dd>    
                        <dd> Инженерия програмного обеспечения </dd>              
                        </div>
                    </dl>
                    </div>
                </div>
            </div>
        );
    }
};