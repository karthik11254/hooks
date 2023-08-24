const server = require("express")();

server.get("/ping", (req, res) => {
  return res.send("PONG!");
});

server.listen(8080, () => {
  console.log(`Server is listening on port: 8080`);
});
