const http = require('http'); 

const server = http.createServer((req,res)=> {
    const url = req.url; 
    res.setHeader('Content-Type', 'text/html'); 
    if(url === "/"){
        res.write('<html>'); 
        res.write('<head><title>Helloooo!</title></head>');
        res.write('<body><h1>Welcome to default page</h1></body>');  
        res.write('</html>'); 
    }

    if(url === "/home"){
        res.write('<html>'); 
        res.write('<head><title>Helloooo!</title></head>');
        res.write('<body><h1>Welcome to home page</h1></body>');  
        res.write('</html>'); 
    }

    if(url === "/about"){
        res.write('<html>'); 
        res.write('<head><title>Helloooo!</title></head>');
        res.write('<body><h1>Welcome to About us page</h1></body>');  
        res.write('</html>'); 
    }

    if(url === "/node"){
        res.write('<html>'); 
        res.write('<head><title>Helloooo!</title></head>');
        res.write('<body><h1>Welcome to my node project</h1></body>');  
        res.write('</html>'); 
    }
    res.end();
    
}); 

server.listen(3000); 
