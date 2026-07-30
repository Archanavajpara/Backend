const express = require('express');
const app = express();

function Authmiddleware(req, res, next) {
    if(req.query.admin === 'true') {    //http://localhost:3000/about?admin=true
        next();
    }
    else {
        res.status(403).send('Access denied. Admins only.');
    }
}
app.use(Authmiddleware);
app.get('/', (req, res) => {
    res.send('Welcome, Home!');
});

app.get('/admin', Authmiddleware, (req, res) => {
    res.send('Welcome, Admin!');
});

app.get('/about', Authmiddleware, (req, res) => {
    res.send('Welcome, About!');
});

app.listen(3000, () => {
    console.log('Server is running on port on http://localhost:3000');
});