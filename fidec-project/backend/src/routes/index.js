const express = require("express");
const router = express.Router();

const contactRoutes = require("./contact");
const serviceRoutes = require("./services");

router.use("/contact", contactRoutes);
router.use("/services", serviceRoutes);

module.exports = router;
