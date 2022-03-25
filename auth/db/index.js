const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("AUTH-SERVICE DATABASE CONNECTED");
    })
    .catch(() => {
        console.log("AUTH-SERVICE DATABASE CONNECTION FAILED!")
    });

const db = mongoose.connection

module.exports = db



