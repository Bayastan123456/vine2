const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const midlewares = jsonServer.defaults();

server.use(midlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createAt = Date.now();
  }
  next();
});

server.use("/api", router);
const POST = 3001;
server.listen(POST, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
