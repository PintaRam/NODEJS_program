const http = require("http");
const fs  = require("fs");
const rest =  fs.readFileSync("restaturant4.html","utf-8");
const raja =  fs.readFileSync("Rajasthani.html","utf-8");
const beng =  fs.readFileSync("Bengaluru.html","utf-8");
const andh =  fs.readFileSync("Andhrapradesh.html","utf-8");
const tn =  fs.readFileSync("TamilNadu.html","utf-8");
const order =  fs.readFileSync("Order.html","utf-8");

const hostname = "127.0.0.1";
const port = "80";
const server = http.createServer((req,res)=>
{   
    url = req.url;
    console.log(url);
    res.statusCode =200;
    res.setHeader("content-type","text/html")
    
    if(url == "/")
    {
        res.end(rest);
    }
    else if(url =="/Bengaluru"){
        res.end(beng);
    }
    else if(url =="/Rajasthani"){
        res.end(beng);
    }
    else if(url =="/TamilNadu"){
        res.end(beng);
    } else if(url =="/Andhrepradesh"){
        res.end(beng);
    }
    else if(url =="/Order"){
        res.end(beng);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 error <h1>")
    }
});
server.listen(port,hostname,()=>
{
    console.log(`listening at http://${hostname}:${port}`)
})
