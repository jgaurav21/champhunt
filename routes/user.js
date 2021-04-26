const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  userValidate,
  userValidationRule,
} = require("../middlewares/routeValidations/userValidation");
//@route:   POST /api/users
//@desc:    Create a new User
//@access:  Public
router.post(
  "/",
  userValidationRule("postUser"),
  userValidate,
  async (req, res) => {
    const { mobile, password, password2 } = req.body;
    try {
      if (password !== password2) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Passwords do not match" }] });
      }

      let user = await User.findOne({ mobile });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Mobile no already exists" }] });
      }

      user = new User({ mobile, password, password2 });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route
router.post("/createToken", async (req, res) => {
  try {
    const user = await User.findOne(req.body.id);
    const token = jwt.sign({ _id: user._id }, config.get("jwtSecret"));
    res.json(token);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
