const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const axios = require("axios");

// const pino = require("express-pino-logger")();
const client = require("twilio")(
  config.get("TWILIO_ACCOUNT_SID"),
  config.get("TWILIO_AUTH_TOKEN")
);

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

router.post("/otp", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: config.get("TWILIO_PHONE_NUMBER"),
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

router.post("/sendOtp", async (req, res) => {
  try {
    const response = `https://2factor.in/API/V1/${config.get(
      "APIKey"
    )}/SMS/+91${req.body.mobile}/AUTOGEN`;
    const otpRes = await axios.get(response);
    const data = otpRes.data;
    res.json({ data, mobile: `${req.body.mobile}` });
  } catch (err) {
    console.log(err.message);
  }
});

//@Route  POST
//@desc   Verify the otp
//@access public
router.post("/verifyOtp", async (req, res) => {
  try {
    const { session, otp, mobile } = req.body;
    const response = `https://2factor.in/API/V1/${config.get(
      "APIKey"
    )}/SMS/VERIFY/${session}/${otp}`;
    const validate = await axios.get(response);
    const user = await User.findOne({ mobile });
    if (!user) res.json({ msg: "Mobile no is not registered" });
    const token = jwt.sign({ _id: user._id }, config.get("jwtSecret"));

    res.json(token);
  } catch (err) {
    console.log(err.message);
    res.send(500).json({ msg: "OTP validation failed" });
  }
});

module.exports = router;
