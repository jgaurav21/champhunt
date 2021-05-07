const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const axios = require("axios");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("googleClientId"),
      clientSecret: config.get("googleClientSecret"),
      callbackURL: "http://localhost:3000",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(err, profile);
    }
  )
);

router.get("/google", async (req, res) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
  res.send("success");
});

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/profile");
  }
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

    const validPassword = await bcrypt.compare(password, user.password);

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

router.post("/sendOtp", async (req, res) => {
  try {
    const response = `https://2factor.in/API/V1/${config.get(
      "APIKey"
    )}/SMS/+91${req.body.mobile}/AUTOGEN`;
    const otpRes = await axios.get(response);
    //console.log(otpRes);
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
    // const user = await User.findOne({ mobile });
    // if (!user) res.json({ msg: "Mobile no is not registered" });
    // const token = jwt.sign({ _id: user._id }, config.get("jwtSecret"));

    res.send(validate.data);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500).json({ msg: "OTP validation failed" });
  }
});

module.exports = router;
