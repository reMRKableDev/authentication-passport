const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send({ message: "You're logged in", user: req.user });
  }
);

module.exports = router;
