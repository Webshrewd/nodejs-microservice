const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("USERS-SERVICE DATABASE CONNECTED");
    })
    .catch(() => {
        console.log("USERS-SERVICE DATABASE CONNECTION FAILED!")
    });

const db = mongoose.connection

module.exports = db



