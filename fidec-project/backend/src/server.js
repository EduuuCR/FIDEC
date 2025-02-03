const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas básicas
app.get("/", (req, res) => {
    res.send("API está rodando...");
});

// Iniciando servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
