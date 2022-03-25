const express = require("express");
const app = express();
const authRouter = require("./routes/index")
require('util')

const dotenv = require("dotenv")

dotenv.config();


app.use(express.json())
app.use('/api/auth', authRouter);


module.exports = app;