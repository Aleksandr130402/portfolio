const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(express.static(path.join(__dirname, 'client/build')));
server.use(cors());

const port = process.env.PORT || 5000;

server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.post('/api/sendEmail', async (request, response) => {
    try {
        let data = request.body;

        let smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'login',
                user: 'sanyoktest@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: data.from,
            to: 'businessmail1304@gmail.com',
            subject: `Message from ${data.name}`,
            html: `
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
        };

        await smtpTransport.sendMail(mailOptions);

        return response.send('Email was successfully sent')
    } catch (e) {
        return response.send('Sorry, we unable to send an email right now...')
    }
});


server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
