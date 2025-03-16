const http = require("http");

const server = http.createServer((rq, res) =>{
res.writeHead(200,{"Content-Type": "text/plain"});
res.end ("hello from dockerized Node.js App!\n");
});

const PORT = 8080;
server.listen(PORT, () => {
console.log (`server running at http://localhost:${PORT}`);
});
