require("dotenv").config();

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = process.env;

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    err && res.status(500).send(err);
    !user && res.status(400).send(info);

    const token = jwt.sign(JSON.stringify(user), APP_SECRET);

    const secureUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    return res.status(200).send({ secureUser, token });
  })(req, res, next);
});

module.exports = router;
