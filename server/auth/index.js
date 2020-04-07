require("dotenv").config();

const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../database/configs");
const User = db.user;
const { APP_SECRET } = process.env;

/* PASSPORT STRATEGIES */
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, done) => {
      User.findOne({ where: { email: email } })
        .then((foundUser) => {
          !foundUser &&
            done(null, false, { message: "Can't find a user with this email" });

          bcrypt
            .compare(password, foundUser.password)
            .then((isUser) => isUser && done(null, foundUser.dataValues))
            .catch((compareErr) =>
              console.error(`Compare error: ${compareErr}`)
            );
        })
        .catch((queryError) => console.error(`Query error: ${queryError}`));
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: APP_SECRET,
    },
    (jwtPayload, done) => {
      User.findOne({ where: { email: jwtPayload.email } })
        .then((user) => done(null, user.dataValues))
        .catch((jwtErr) => console.error(`JWT Error: ${jwtErr}`));
    }
  )
);
