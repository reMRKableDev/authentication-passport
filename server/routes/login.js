require("dotenv").config();

const express = require("express");
const RateLimit = require("express-rate-limit");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = process.env;

// Rate limiting: max 5 login attempts per minute per IP
const loginLimiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many login attempts from this IP, please try again after a minute"
});
router.post("/", loginLimiter, (req, res, next) => {
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
