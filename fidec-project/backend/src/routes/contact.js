const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Rota para enviar o formulário de contato
router.post("/", contactController.sendContactForm);

module.exports = router;
