var express = require('express');
var router = express.Router();
const User = require("../models/authModel")
const { verifyTokenAndAuthorization } = require("../../auth/middlewares/verifyToken")
const PORT = process.env.PORT || 8000


// Users-Service uptime endpoint


// GREET USER


// FETCH USER DETAILS

module.exports = router;
