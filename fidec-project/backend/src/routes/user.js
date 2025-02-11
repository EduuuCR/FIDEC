const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getProfile } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Rota para registrar um usuário
router.post("/register", registerUser);

// Rota para login do usuário
router.post("/login", loginUser);

// Rota para obter perfil do usuário (autenticado)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
