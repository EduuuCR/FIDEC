const express = require("express");
const router = express.Router();

const contactRoutes = require("./contact");
const serviceRoutes = require("./services");
const userRoutes = require("./user"); // Adicionando a nova rota de usuários

router.use("/contacts", contactRoutes);  // Rotas de contato
router.use("/services", serviceRoutes);  // Rotas de serviços
router.use("/users", userRoutes);        // Rotas de autenticação e perfil

module.exports = router;

