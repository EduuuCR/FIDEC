require("dotenv").config(); // Carrega variáveis de ambiente
const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Importa as rotas separadas

const app = express();

// Configurações básicas do servidor
app.use(express.json()); // Permite receber JSON no body das requisições
app.use(cors()); // Permite requisições de diferentes origens

// Definição de rotas
app.use("/api", routes);

// Porta do servidor (usando variável de ambiente ou padrão 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
