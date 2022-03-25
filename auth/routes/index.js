var express = require("express");
var router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/authModel");
const PORT = process.env.PORT || 5000;

// Auth-Service uptime endpoint

router.get("/ping", (req, res) => {
  res.send(`Auth-Service is up and running  on port ${PORT}`);
});

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Invalid credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json("Invalid username or password");

    const accesstoken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: "1h" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accesstoken });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
