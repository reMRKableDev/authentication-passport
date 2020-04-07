const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database/configs");
const User = db.user;

router.post("/", (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };
  /* Hashing incoming password */
  bcrypt
    .hash(user.password, 10)
    .then((hashedPassword) => {
      /* Add the new user to the database table with hashedPassword. */
      User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: hashedPassword,
      })
        .then((newUser) =>
          res
            .status(200)
            .send(
              `New user has been added: ${JSON.stringify(newUser.dataValues)}`
            )
        )
        .catch((userErr) => console.error(`User error: ${userErr}`));
    })
    .catch((hashErr) => console.error(`Hashing gave errors: ${hashErr}`));
});

module.exports = router;
