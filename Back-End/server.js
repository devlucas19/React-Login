// Importação dos pacotes
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Rotas
const routes = require("./routes/routes");

// Conexão com banco de dados
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/login-general-users");

db = mongoose.connection;

db.on("error", () => console.log("Algo de errado ocorreu ao abrir o MongoDB"));
db.once("open", () => {
  console.log("MongoDB Carregado");
});

// Setando default middlewares
app.use(express.json());
app.use(cors());
app.use(routes);

// Rota padrão
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Rodando Servidor
app.listen(3000, () => {
  console.log("Servidor Rodando na porta 3000");
});
