const express = require("express");
const authController = require("../controllers/auth");

const api = express.Router();

// api.post => (url, funcion a ejecutar)
api.post("/refresh-access-token", authController.refreshAccessToken);

module.exports = api;