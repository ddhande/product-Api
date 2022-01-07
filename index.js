const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./api/users/user.routes");

app.use(express.json());
app.use("/api/user", userRoute);

app.listen(process.env.APP_PORT, function () {
  console.log("server listening on port:", process.env.APP_PORT);
});
