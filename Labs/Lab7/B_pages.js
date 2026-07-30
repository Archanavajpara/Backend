// Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.(B)
const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Home Page")
    }
    else if(req.url==="/about"){
        res.end("About Page")
    }
    else if(req.url==="/contact"){
        res.end("Contact Page")
    }
    else if(req.url==="/services"){
        res.end("Services Page")
    }
    else if(req.url==="/products"){
        res.end("Products Page")
    }
    else{
        res.end("404 Not Found")
    }
    console.log(`Received request for ${req.url}`);
});

server.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});