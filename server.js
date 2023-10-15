require('dotenv').config();
const express = require('express');
const cors = require('cors');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: 'b01e4f351d20b0bc79fa5d1ab69452d0-28e9457d-d138a2d4' }); // Replace with your API key

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

console.log('Working before the post')


console.log('Working after the post')

app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    console.log(req.body)

    const message = {
        from: "Bhawna <bhawnasharma5779@gmail.com>", 
        to: [email],
        subject: "Thanks for subscribing!",
        text: "Welcome to our newsletter!"
    };

    mg.messages.create('sandbox383ad9d60f634fdb8ad23d30f253d9c9.mailgun.org', message) 
        .then(() => {
            res.sendStatus(200);
            console.log('email sent !!')
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            res.sendStatus(500);
        });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
