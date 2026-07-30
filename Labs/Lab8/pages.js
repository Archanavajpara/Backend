// Create a webapp with 5 pages like about, contact etc.. using ExpressJS.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is the home page.');
});
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
}); 
app.get('/services', (req, res) => {
    res.send('This is the services page.');
});
app.get('/portfolio', (req, res) => {
    res.send('This is the portfolio page.');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

