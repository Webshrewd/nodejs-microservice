const mongoose = require('mongoose')

// MongoDB connection string goes here

const db = mongoose.connection

module.exports = db
