const http = require("http");
const fs = require("fs");
const  fileConstent = fs.readFileSync("restaturant4.html","utf-8");
const  server = http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(fileConstent)
});
const hostname = "127.0.0.1";
const port = "80";
server.listen(port,hostname,()=>
{
    console.log(`Listening http://${hostname}:${port}`);
})
