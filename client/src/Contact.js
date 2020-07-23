import React, {Component} from 'react'
import './Contact.css';
import axios from 'axios'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '',
            sent: false
        }
    }

    handleSubmit(e) {
    
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/forma',data)
        .then(res=>{
            this.setState({
                sent: true
            }, this.resetForm())
        }).catch(()=> {
            console.log('message not sent');
        })
    }  
    
    resetForm(){

        this.setState({name: '', email: '', message: ''})

        setTimeout(()=> {
            this.setState({
                sent: false
            })
        }, 3000)
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
                    <div className={this.state.sent ? 'msg msgAppear': 'msg'}>Message has been sent</div>
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