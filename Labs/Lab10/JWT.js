const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const secretKey = 'your_secret_key'; 

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ 
            message: 'Login successful',
            token: token 
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
            return res.status(401).json({ message: 'Access denied. Invalid token.' });
        }

        req.user = decode;
        next();
    });
}

app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ message: 'Welcome to the protected route!', user: req.user });
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
     