const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const api = require("./routes/api");
const swagger = require("./utils/swagger");
let port = process.env.PORT || 5000;

dotenv.config();
const app = express();
const server = http.createServer(app);

// app.use(cors());
app.use(function (req, res, next) {
  const corsWhitelist = ["http://localhost:3000"];

  const origin = req.headers.origin;
  if (corsWhitelist.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(cookieParser());
app.use(express.json());

app.use("/api", api);
swagger.swaggerDocs(app, port);

app.use((err, req, res, next) => {
  const { status = 500, message = "Loi rui" } = err;
  res.status(status).end(message);
});

server.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
