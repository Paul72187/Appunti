const httpServer = require("http-server");
const path = require("path");

const pathToHtmlAndJsFiles = path.join(__dirname, "/"); // /src se metto html css nella src ( tutto quello che deve essere servito)
 
const server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
console.log("server is running on http://localhost:3000")