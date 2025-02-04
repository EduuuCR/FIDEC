const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// Rota para listar serviços
router.get("/", serviceController.getServices);

module.exports = router;
