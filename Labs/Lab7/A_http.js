// Create a hello world webapp using “http” core module in NodeJS.
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }
    console.log(`Received request for ${req.url}`);
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});