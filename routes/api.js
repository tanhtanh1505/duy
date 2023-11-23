const app = require("express")();
const authRoutes = require("./auth");
const userRoutes = require("./user");

app.use("/", authRoutes);
app.use("/user", userRoutes);

module.exports = app;
