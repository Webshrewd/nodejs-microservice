const express = require("express");
const app = express();
const userRouter = require("./routes/index")


const dotenv = require("dotenv")
dotenv.config();


app.use(express.json())
app.use('/api/users', userRouter);


module.exports = app