const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

//@route    POST /api/auth
//@desc     authenticate user
//@access   Public
router.post("/", async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Mobile Number" });
    }

    const validPassword = bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ msg: "Invalid mobile or password" });
    }

    const token = jwt.sign({ _id: user._id }, config.get("jwtSecret"));

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
