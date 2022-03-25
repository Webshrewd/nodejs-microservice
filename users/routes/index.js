var express = require('express');
var router = express.Router();
const User = require("../models/authModel")
const { verifyTokenAndAuthorization } = require("../../auth/middlewares/verifyToken")
const PORT = process.env.PORT || 8000


// Users-Service uptime endpoint

router.get("/ping", (req, res) => {
    res.send(`Users-Service is up and running  on port ${PORT}`)
})


// GREET USER

router.get("/:id/greet", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) res.status(404).json(`User with id: ${req.params.id} not found!`)
        res.status(200).json(`Hello ${user.username}`)

    } catch (error) {
        res.status(500).json(error)
    }
})

// FETCH USER DETAILS

router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) res.status(404).json(`User with id: ${req.params.id} not found!`)
        const { password, ...others } = user._doc;
        res.status(200).json(others)


    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
