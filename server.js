const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server rodando na porta ${PORT}`);
});