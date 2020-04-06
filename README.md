# Authentication Passport.js

An introduction to implementing authentication using Passport.js strategies.  

The application covers:
- Using Passport's ```LocalStrategy``` for login authentication.
- Creating JSON Web Tokens by implementing ```.sign()``` from ```jsonwebtokens```.
- Using Passport's ```JWTStrategy``` to validate the created tokens. 
- Saving the input to a MySQL database using the Sequelize ORM.
- Returning confirmation of action completed or not completed.

## Getting Started

Change the ```.env.default``` file to an ```.env``` file which will hold the environment variables associated with your database.

Configure your Sequelize connector to read from process.env

```javascript
const connector = new Sequelize(
  process.env.YOUR_DATABASE_NAME,
  process.env.YOUR_DATABASE_USER,
  process.env.YOUR_DATABASE_PASSWORD,
  {
    host: process.env.YOUR_DATABASE_HOST,
    dialect: YOUR_DATABASE_DIALECT
  }
);
```

### How To:

To use the examples provided:

```
1. Clone repo.
2. Run 'npm install' to get the required dependencies.
3. Use 'npm run server' to get the server running and test endpoint wit Postman.

```

Have fun :)
