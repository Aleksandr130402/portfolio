import React, {Component} from 'react'
import './Contact.css';
import axios from 'axios'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            message : ''
        }
    }

    handleSubmit(e) {
    
        e.preventDefault();

        axios({
        method: "POST", 
        url:"php/index.php", 
        data:  this.state
        }).then((response)=>{
        if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
        }
        })
    }  
    
    resetForm(){
    
        this.setState({name: '', email: '', message: ''})
     }
    
    render() {
        return(
        <div className="contact" id="contact">	
            <div className="col-12">
                <div className="contact-title">
                <h3>Contact</h3>
                </div> 
                <div className="contact-text">
                    <p>Работаете над каким-нибудь классным проектом? Есть работа для меня? Просто напишите мне.</p>            
                </div>
                <div className="contact-form">
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div class="form-group">    
                        <input type="text" className="form-control form-control-lg" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Your Name"/>
                    
                        <input type="email" className="form-control form-control-lg" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="YourEmail@email.com" name="email"/>
                    
                        <textarea className="form-control form-control-lg" rows="5" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                        
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block">Send</button>
                    </form>                                   
                </div>
                
            </div>                	
	    </div>
        )   
    };

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
}

export default Contact;