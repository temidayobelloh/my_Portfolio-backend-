//require('dotenv').config(); // Load environment variables

//const express = require('express');
//const nodemailer = require('nodemailer');
//const app = express();

// Middleware to parse form data
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Route to handle form submissions
//app.post('/submit', (req, res) => {
    //const transporter = nodemailer.createTransport({
        service: //'gmail',
        //auth: {
            //user: process.env.EMAIL_USER, // Use environment variable
            //pass: process.env.EMAIL_PASS  // Use environment variable
        //}
    //});

    //const mailOptions = {
        //from: 'dayobelloh@gmail.com',
        //to: 'recipient-email@gmail.com',
        //subject: 'New Contact Form Submission',
        //text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage: ${req.body.message}`
    //};

    //transporter.sendMail(mailOptions, (error, info) => {
        //if (error) {
          //  return res.status(500).send('Failed to send email.');
        //}
        //res.status(200).send('Email sent successfully!');
    //});
//});

// Start the server
//app.listen(3002, () => {
   // console.log('Server is running on port 3002');
//});
