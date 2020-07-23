const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.get('/',()=>{
    resizeBy.send('welcome to my forma')
})

app.post('/api/forma', (req,res)=>{

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user:'businessmail1304@gmail.com',
            pass:'eugenia130402'
        }
    });

let mailOptions={
    from: data.email,
    to: 'businessmail1304@gmail.com',
    subject: `Message from ${data.name}`,
    html:`
    
    <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Name: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
    `
};

smtpTransport.sendMail(mailOptions, (error,response)=>{

    if(error){
        res.send(error)
    }
    else {
        res.send('Success')
    }
})

smtpTransport.close();

})