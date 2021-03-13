const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Profile = require("../Models/Profile");

router.post("/", auth, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      gender,
      dob,
      state,
      district,
      country,
      role,
      favIPLTeam,
      favBatsman,
      favBowler,
      favAllRounder,
      favWK,
    } = req.body;
    let profile = await Profile.findOne({ email });
    if (profile) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email already exists" }] });
    }

    profile = new Profile({
      firstName,
      lastName,
      email,
      gender,
      dob,
      state,
      district,
      country,
      role,
      favIPLTeam,
      favBatsman,
      favBowler,
      favAllRounder,
      favWK,
    })

    await profile.save();

    return res.json({ profile });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
