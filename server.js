const http = require("http");
const dbConnection = require("./confiq/db");

dbConnection();

const app = require("./app");
const server = http.createServer(app);
server.listen(3000);



