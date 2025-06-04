const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Hello!");
    } else if(req.url === "/about"){
        res.write("About page!");
    } else if(req.url === "/contact"){
        res.writeHead(200, {"Content-type" : "text/html"});
        res.write("<h1> Contact Page!</h1>");
    } else {
        res.write("404 not found!");
    }
    res.end();
});

server.listen(3000, ()=> {
    console.log("Server is running on port: http://localhost:3000");
    
})