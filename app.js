const express = require("express");
const cookieParser = require("cookie-parser");
const hoganExpress = require("hogan-express");
const chalk = require("chalk");
const morgan = require('morgan');
const config = require("./config/config");
const router = require("./routes");
require("./config/dbConnect").connectToDb();
const app = express();
const port = config.port;

app.use(express.json());
app.use('/' , router)

app.listen(port, () => {console.log(`listening on port ${port}`)});