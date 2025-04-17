import * as http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8000);
