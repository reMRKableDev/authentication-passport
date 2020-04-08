# Node/Express Server + Passport.js & JWT

An introduction to implementing authentication using [Passport.js](http://www.passportjs.org/) strategies.

The backend covers:

- Creating a server with [Express.js](https://expressjs.com/).
- Using [Passport's LocalStrategy](http://www.passportjs.org/packages/passport-local/) for login authentication.
- Generating JSON Web Tokens by implementing `.sign()` from [jsonwebtokens](https://github.com/auth0/node-jsonwebtoken#readme).
- Using Passport's [JWTStrategy](http://www.passportjs.org/packages/passport-jwt/) to validate the created tokens.
- Saving the input to a MySQL database using the [Sequelize ORM](https://sequelize.org/v5/).
- Returning confirmation of action completed or not completed.
