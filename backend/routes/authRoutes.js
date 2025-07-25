const express = require("express");
const authRouter = express.Router();
const { handleLogin, handleRegistration } = require("../controllers/authController.js");

authRouter.post("/login", handleLogin);
authRouter.post("/register", handleRegistration);

module.exports = authRouter;
