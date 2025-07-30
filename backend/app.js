const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { testDbConnection } = require("./config/db.js");
const swaggerUI = require("swagger-ui-express");
const swaggerDefinition = require("./config/swaggerConfig.js");


dotenv.config();
const expressApp = express();

expressApp.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDefinition));

expressApp.use(cors());
expressApp.use(express.json());
testDbConnection();

expressApp.use("/", require("./routes/authRoutes.js"));
expressApp.use("/", require("./routes/productRoutes.js"));

module.exports = expressApp;
expressApp.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});
