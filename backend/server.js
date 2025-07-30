require("dotenv").config();
const expressApp = require("./app.js");
const { testDbConnection } = require("./config/db"); 

const PORT = process.env.PORT || 8080;

(async () => {
  await testDbConnection(); 
  expressApp.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
})();
