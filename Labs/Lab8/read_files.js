// Create a webapp in NodeJS which reads files like about.txt, contact.txt and display it using express
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('This is the home page.');
});
app.get('/about', (req, res) => {
    fs.readFile('about.txt', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {x   
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/contact', (req, res) => {
    fs.readFile('contact.txt', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/cart', (req, res) => {
    fs.readFile('cart.txt', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});